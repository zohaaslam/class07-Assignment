import Image from "next/image"
import  image from "../public/image.jpg"

export default function About() {
  return (
    
  <div className="bg-pink-300  f h-screen flex px-8 items-center"  >
    <div className="w-1/2 flex flex-col gap-4 justify-center  h-48">
  <h1 className="text-purple-950 font-extrabold text-[44px] p-4">Welcome to our website</h1>
  <p className="font-normal  p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis laudantium soluta dolor in officiis porro impedit amet voluptatem optio enim non odio sequi, nisi aspernatur doloremque rem nihil quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sapiente distinctio alias impedit, facere optio modi, nam mollitia numquam aliquam, aliquid iste odio reprehenderit fuga incidunt sed? Unde, eum commodi?</p>
  <button className="w-[237px] h-[66px] p-3 ml-5  bg-purple-900 text-white hover:bg-orange-500 ">Contact Us</button></div>

 <div className=" flex  ml-24  shadow-2xl">
  <Image 
  src={image}
  alt="image"
  width={600}
  height={200} 



 
 
 />
</div>
</div>
  )
}
