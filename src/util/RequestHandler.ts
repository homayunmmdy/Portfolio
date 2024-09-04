import { NextResponse } from "next/server";

type Cache<T> = T;

class RequestHandler<T> {
  constructor(private Model: any, private Cache: Cache<T>) {}

  async GetAll() {
    try {
      if (process.env.NEXT_PUBLIC_STATUS == "dev") {
        return NextResponse.json({ data: this.Cache }, { status: 200 });
      } else {
        const data = await this.Model.find();
        return NextResponse.json({ data }, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }

  async Post(req: Request, successMessage?: string): Promise<NextResponse> {
    try {
      const body = await req.json();
      const formData = body.formData;
      await this.Model.create(formData);
      return NextResponse.json(
        { message: successMessage || "Data created successfully" },
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }

  async Get(id: string) {
    try {
      if (process.env.NEXT_PUBLIC_STATUS === "dev") {
        //@ts-ignore
        const document = this.Cache.find((doc) => doc._id === id);
        if (document) {
          return NextResponse.json({ document }, { status: 200 });
        }
      } else {
        const document = await this.Model.findOne({ _id: id });
        if (!document) {
          return NextResponse.json({ message: "Not Found" }, { status: 404 });
        }
        return NextResponse.json({ document }, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }

  async PUT(
    id: string,
    req: Request,
    successMessage?: string
  ): Promise<NextResponse> {
    try {
      const body = await req.json();
      const Data = body.formData;

      const updateData = await this.Model.findByIdAndUpdate(id, {
        ...Data,
      });

      return NextResponse.json(
        { message: successMessage || "Data Update Successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }

  async DELETE(id: string, successMessage?: string): Promise<NextResponse> {
    try {
      const deleteDocument = await this.Model.findByIdAndDelete(id);
      if (!deleteDocument) {
        return NextResponse.json({ message: "Not Found" }, { status: 404 });
      }
      return NextResponse.json(
        { message: successMessage || "Data Delete Successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }
  ErrorResponse(err: unknown) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export default RequestHandler;
