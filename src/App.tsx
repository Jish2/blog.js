import styled from "@emotion/styled";

const HeroText = styled.h1`
	margin: 0;
	font-size: 72px;
`;

const PageGeist = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const HeroGeist = styled(PageGeist)`
	background-color: var(--primary);
`;

const Spacer = styled.div`
	aspect-ratio: 9/2;
	width: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	background-image: url("./wave-seperator.svg");
`;

function App() {
	return (
		<>
			<HeroGeist id="hero">
				<HeroText>blog.js</HeroText>
				<p>a simple plug & play library for creating blogs</p>
				<a href="#get-started">
					<button>get started</button>
				</a>
				{/* animated arrow icon please */}
			</HeroGeist>
			<Spacer />
			<PageGeist id="construction">
				<HeroText>Hey!</HeroText>
				<p>thanks for checking us out! blog.js is under development.</p>
				<p>come back later and see what's happening</p>
			</PageGeist>
			<PageGeist id="about">
				<HeroText>Why?</HeroText>
				<p>when i hand-made my blog from scratch, i realized blog creation fundamentally comes down to one things.</p>
				<p>a cms.</p>
				<p>i realized there was no plug & play option for any cms, so i decided to close this gap.</p>
			</PageGeist>
		</>
	);
}

export default App;
