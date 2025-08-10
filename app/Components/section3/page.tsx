// import './section3.css'
import Card from '../Card/page'

export default function Section3() {
    return (
        <section className="flex flex-col place-items-center justify-center gap-y-8 gap-x-6 text-center py-20 px-4 sm:px-[5%]">
            <div className="section-header text-center flex flex-col max-w-[800px] mx-auto mb-12 sm:mb-16 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333] mb-4 sm:mb-6 md:mb-7">
                    Why Choose NodesIO?
                </h2>
                <p className="text-base sm:text-xl md:text-2xl text-gray-600">
                    Experience the future of waste management with our innovative features
                </p>
            </div>

            <div className="feature-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-7 max-w-[1200px] mx-auto px-7 place-items-center">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}
