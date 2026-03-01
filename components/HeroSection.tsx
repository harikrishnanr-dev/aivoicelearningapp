import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section className="wrapper pt-28 mb-10 md:mb-16">
			<div className="library-hero-card">
				<div className="library-hero-content">
					{/* Left */}
					<div className="library-hero-text">
						<h1 className="library-hero-title">Your Library</h1>
						<p className="library-hero-description">
							Convert your books into interactive AI conversations.
							<br />
							Listen, learn, and discuss your favorite reads.
						</p>
						<Link
							href="/books/new"
							className="library-cta-primary mt-4">
							<span className="text-xl leading-none font-medium mr-1">+</span> Add new book
						</Link>
					</div>

					{/* Center (Desktop) */}
					<div className="library-hero-illustration-desktop">
						<Image
							src="/assets/hero-illustration.png"
							alt="Vintage books and globe"
							width={400}
							height={300}
							className="object-contain"
							priority
						/>
					</div>

					{/* Center (Mobile) */}
					<div className="library-hero-illustration">
						<Image
							src="/assets/hero-illustration.png"
							alt="Vintage books and globe"
							width={300}
							height={200}
							className="object-contain"
							priority
						/>
					</div>

					{/* Right */}
					<div className="library-steps-card flex-1 max-w-[320px] w-full mt-6 lg:mt-0 shadow-sm">
						<div className="flex flex-col gap-6 py-2">
							<div className="library-step-item">
								<div className="library-step-number">1</div>
								<div className="flex flex-col placeholder-gray-500">
									<h3 className="library-step-title">Upload PDF</h3>
									<p className="library-step-description mt-0.5 text-gray-500">Add your book file</p>
								</div>
							</div>

							<div className="library-step-item">
								<div className="library-step-number">2</div>
								<div className="flex flex-col">
									<h3 className="library-step-title">AI Processing</h3>
									<p className="library-step-description mt-0.5 text-gray-500">We analyze the content</p>
								</div>
							</div>

							<div className="library-step-item">
								<div className="library-step-number">3</div>
								<div className="flex flex-col">
									<h3 className="library-step-title">Voice Chat</h3>
									<p className="library-step-description mt-0.5 text-gray-500">Discuss with AI</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
