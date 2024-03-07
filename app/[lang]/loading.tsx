import Image from "next/image";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="fixed top-0 left-0 bg-[#E7E7E7] h-screen w-full z-50 flex items-center justify-center animate-pulse">
            <Image src="/images/footer-logo.png" width={500} height={200} alt="logo" className="w-[500px] invert-[100%] animate-pulse"/>
        </div>
    )
  }