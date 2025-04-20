import Image from "next/image"
import PaymentOptions from "@/components/payment-options"

export default function DonationPage() {
    return (
        <div className="min-h-screen bg-background pt-5">
           

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="donate">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Why Donate?</h2>
                        <p className="text-lg text-gray-100 mb-8">
                            MIST Mongol Barota is a cross-departmental advanced robotics team from the Military Institute of Science and Technology (MIST), consisting of 35 dedicated students. Established in 2013, our mission is to advance robotics and space exploration. Over the years, our team has continuously pushed the boundaries of innovation to represent MIST and Bangladesh on the global stage.
                            <br /><br />
                            MIST Mongol Barota has qualified for the University Rover Challenge (URC) 2025, the world&apos;s leading robotics competition, to be held in Utah, USA. Out of more than 100 teams, the top 36 were selected, with MIST achieving the highest System Acceptance Review (SAR) score of 92.64. We are now working hard to prepare for this competition and demonstrate our skills on the global stage.
                            <br /><br />
                            With over a decade of progress, we are on the verge of achieving something extraordinary. But we need your support to make it happen. Your contribution will help us fund the development of our latest Mars rover, AURORA X, designed to tackle the challenges of the Martian environment and compete in key challenges such as autonomous navigation, science missions, and equipment servicing.
                        </p>

                        <div className="bg-gray-50 rounded-3xl p-8 mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact & Achievements</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-rose-600 mb-2">#1</div>
                                    <div className="text-gray-600">Top SAR Score in URC 2025, 2024 (Bangladesh)</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-rose-600 mb-2">2<sup>nd</sup></div>
                                    <div className="text-gray-600">Anatolian Rover Challenge 2024</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-rose-600 mb-2">Global</div>
                                    <div className="text-gray-600">Champions URC 2021</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-rose-600 mb-2">3<sup>rd</sup></div>
                                    <div className="text-gray-600">ARC 2022</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-rose-600 mb-2">5<sup>th</sup></div>
                                    <div className="text-gray-600">ARC 2023</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">How Your Support Helps</h3>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                <li>Rover parts and materials for AURORA X</li>
                                <li>Transportation and logistics to compete in the USA</li>
                            </ul>
                            <p className="text-gray-600">
                                We&apos;re incredibly proud of everything we&apos;ve achieved so far, but there&apos;s so much more to do. With your help, MIST Mongol Barota can reach new heights in space robotics and contribute to the future of Mars exploration.<br />
                                Thank you for your support. Together, we can make history in URC 2025!
                            </p>
                            <p className="mt-4 text-gray-900 font-semibold">Team Mongol Barota</p>
                            <div className="mt-4">
                                <a href="https://thedailycampus.com/innovation-research/176147/%25252525E0%25252525A6%2525252587%25252525E0%25252525A6%2525252589%25252525E0%25252525A6%25252525A8%25252525E0%25252525A6%25252525BF%25252525E0%25252525A6%25252525AD%25252525E0%25252525A6%25252525BE%25252525E0%25252525A6%25252525B0%25252525E0%25252525A7%252525258D%25252525E0%25252525A6%25252525B8%25252525E0%25252525A6%25252525BF%25252525E0%25252525A6%252525259F%25252525E0%25252525A6%25252525BF-%25252525E0%25252525A6%25252525B0%25252525E0%25252525A7%252525258B%25252525E0%25252525A6%25252525AD%25252525E0%25252525A6%25252525BE%25252525E0%25252525A6%25252525B0-%25252525E0%25252525A6%252525259A%25252525E0%25252525A7%252525258D%25252525E0%25252525A6%25252525AF%25252525E0%25252525A6%25252525BE%25252525E0%25252525A6%25252525B2%25252525E0%25252525A7%2525252587%25252525E0%25252525A6%252525259E%25252525E0%25252525A7%252525258D%25252525E0%25252525A6%252525259C-%25252525E0%25252525A6%25252525AA%25252525E0%25252525A7%252525258D%25252525E0%25252525A6%25252525B0%25252525E0%25252525A6%25252525A4%25252525E0%25252525A6%25252525BF%25252525E0%25252525A6%25252525AF%25252525E0%25252525A7%252525258B%25252525E0%25252525A6%2525252597%25252525E0%25252525A6%25252525BF%25252525E0%25252525A6%25252525A4%25252525E0%25252525A6%25252525BE%25252525E0%25252525A7%252525259F-%25252525E0%25252525A6%252525259A%25252525E0%25252525A7%2525252582%25252525E0%25252525A7%252525259C%25252525E0%25252525A6%25252525BE%25252525E0%25252525A6%25252525A8%25252525E0%25252525A7%252525258D%25252525E0%25252525A6%25252525A4-%25252525E0%25252525A6%25252525AA%25252525E0%25252525A6%25252525B0%25252525E0%25252525A7%252525258D%25252525E0%25252525A6%25252525AC%25252525E0%25252525A7%2525252587-%25252525E0%25252525A6%252525258F%25252525E0%25252525A6%25252525AE%25252525E0%25252525A6%2525252586%25252525E0%25252525A6%2525252587%25252525E0%25252525A6%252525258F%25252525E0%25252525A6%25252525B8%25252525E0%25252525A6%252525259F%25252525E0%25252525A6%25252525BF-%25252525E0%25252525A6%25252525AE%25252525E0%25252525A6%2525252599%25252525E0%25252525A7%252525258D%25252525E0%25252525A6%2525252597%25252525E0%25252525A6%25252525B2-%25252525E0%25252525A6%25252525AC%25252525E0%25252525A6%25252525BE%25252525E0%25252525A6%25252525B0%25252525E0%25252525A7%252525258D%25252525E0%25252525A6%25252525A4%25252525E0%25252525A6%25252525BE-%25252525E0%25252525A6%25252525A6%25252525E0%25252525A6%25252525B2" target="_blank" rel="noopener noreferrer" className="text-rose-600 underline mr-4">Read the article on The Daily Campus</a>
                                <a href="https://youtu.be/8F-JkxO275Y" target="_blank" rel="noopener noreferrer" className="text-rose-600 underline">Have a view on our System Acceptance Review</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden lg:sticky lg:top-24">
                            <div className="p-5">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Donation Options</h2>
                                <PaymentOptions />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           

          
        </div>
    )
}
