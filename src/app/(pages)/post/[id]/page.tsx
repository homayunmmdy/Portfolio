import EditPostForm from "@/components/EditPostForm";

//@ts-ignore
const getTicketById = async (id) => {
  const API_URL = process.env.API_URL

  try {
    const res = await fetch(`${API_URL}/api/posts/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

let updateTicketData = {};
{/* @ts-ignore */}
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    {/* @ts-ignore */}
    updateTicketData = updateTicketData.document;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditPostForm post={updateTicketData} />;
};

export default TicketPage;