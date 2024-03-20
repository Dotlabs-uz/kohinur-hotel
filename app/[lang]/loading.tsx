export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="fixed top-0 left-0 bg-[#c4c4c4] h-screen w-full">
            <div className="bg-[#E7E7E7] h-screen w-full z-50 flex items-center justify-center animate-pulse"></div>
        </div>
    );
}
