
import PageDescription from "@/components/PageDescription";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <PageTitle titr="About" title="Hi I'm Homayoun" />
      <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
        <PageDescription title="Some inspiring words to describe yourself" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos quas blanditiis, quos sint nostrum fugit aperiam inventore optio itaque molestias corporis, ipsa tenetur eligendi nihil iste porro, natus culpa consequuntur? Maxime, corporis tempore. Sed tenetur veritatis velit recusandae eum, molestiae voluptate ducimus laudantium esse illo doloribus atque eligendi deleniti iusto." />
        <Image
          width={1000}
          height={750}
          alt="Homayoun"
          src="/homayoun.jpg"
          className="max-h-[750px] w-full xl:max-w-[1000px] mx-auto pb-20"
        />
        <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
          <section className='mb-10'>
            <h2 className="text-3xl pb-2 font-light text-black  sm:text-4xl md:text-5xl tracking-wide racking-wide">
              How I Got Here
            </h2>
            <p className='font-light md:text-xl my-2 text-gray-600 leading-relaxed'>
              Eaque temporibus culpa perferendis expedita assumenda mollitia magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit facilis voluptates voluptatum animi numquam quas ea praesentium quaerat maxime sunt odit inventore itaque est et autem sequi nulla. Distinctio obcaecati nesciunt asperiores dolorum tenetur voluptates, nemo alias doloremque. Quos cumque ipsum laudantium odio vero aut odit nostrum aliquam? Nostrum in facilis, minus fuga quasi voluptas explicabo possimus incidunt, expedita tempora eius rem nobis sequi. Doloribus esse sint suscipit quam nisi blanditiis voluptate explicabo.
            </p>
          </section>
          <section className='mb-10'>

            <h2 className="text-3xl pb-2 font-light text-black  sm:text-4xl md:text-5xl tracking-wide racking-wide">
              Why Work With Me

            </h2>
            <p className='font-light md:text-xl my-2 text-gray-600 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus culpa perferendis expedita assumenda mollitia magnam, facilis voluptates voluptatum animi numquam quas ea praesentium quaerat maxime sunt odit inventore itaque est et autem sequi nulla. Distinctio obcaecati nesciunt asperiores dolorum tenetur voluptates, nemo alias doloremque. Quos cumque ipsum laudantium odio vero aut odit nostrum aliquam? Nostrum in facilis, minus fuga quasi voluptas explicabo possimus incidunt, expedita tempora eius rem nobis sequi. Doloribus esse sint suscipit quam nisi blanditiis voluptate explicabo.

            </p>
            <p className='font-light md:text-xl my-2 text-gray-600 leading-relaxed'>
              Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit. Numquam, corporis accusamus commodi saepe nostrum nesciunt nisi rem necessitatibus unde laboriosam molestias, quam ipsa voluptatum sed ex cumque facilis assumenda maiores tempore reiciendis enim accusantium?
            </p>
          </section>
          <section className='mb-10'>
            <h2 className="text-3xl pb-2 font-light text-black  sm:text-4xl md:text-5xl tracking-wide racking-wide">
              A Few More Words About Myself
            </h2>
            <p className='font-light md:text-xl my-2 text-gray-600 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda debitis aut quidem ad voluptates quibusdam soluta temporibus, eveniet nobis tempore sunt, provident sapiente accusamus dignissimos voluptatum fugiat nulla dicta nihil molestiae aspernatur error in. Ut quo porro voluptatum delectus asperiores culpa non cum facere minima nesciunt assumenda, praesentium reprehenderit accusamus, quam repellat nobis nemo? Ut magnam unde culpa pariatur possimus sunt fugiat ea maxime praesentium eaque quo odio sed eligendi harum dolor, repellendus reprehenderit facere nihil quam. Saepe, magni.            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About