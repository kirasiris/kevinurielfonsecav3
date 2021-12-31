import Link from "next/link";
import { withRouter } from "next/router";
// ACTIONS
import { getWordPressPosts } from "@/actions/wordpress";
// HELPERS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Particles from "react-tsparticles";
import Layout from "@/layout/Layout";
import { APP_NAME, APP_DESCRIPTION, PUBLIC_URL } from "@/config";

export const getServerSideProps = async (context) => {
	const params = `?page=1&per_page=10`;
	const wordPressPostListing = (await getWordPressPosts(params)()) || [];

	return {
		props: {
			params: params,
			serverWordPressListingPosts: wordPressPostListing,
		},
	};
};

const Home = ({ params, serverWordPressListingPosts, router }) => {
	return (
		<Layout
			title={`${APP_DESCRIPTION}`}
			cssInline={`
				nav {
					z-index: 100;
					margin-bottom: 0px !important;
					position: absolute !important;
					width: 100% !important;
					
				}
				.bg-dark: {
					background-color:transparent !important;
				}
			`}
			menuVariantColor="bg-transparent"
		>
			<section
				className="showcase"
				id="particles-js"
				style={{
					background:
						"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url(https://kevinurielfonseca.me/wp-content/uploads/2021/09/tree.jpg) no-repeat center center",
				}}
			>
				<Container fluid>
					<Row>
						<Col lg={`12`} className="text-center">
							<h1>{APP_NAME}</h1>
							<Link href="/blog">Blog</Link>
							<Link href="/themes">Themes</Link>
						</Col>
					</Row>
				</Container>
				<Particles
					id="tsparticles"
					options={{
						fps_limit: 60,
						interactivity: {
							detectsOn: "canvas",
							events: {
								onClick: { enable: false, mode: "push" },
								onHover: { enable: true, mode: "repulse" },
								resize: true,
							},
							modes: {
								push: { particles_nb: 4 },
								repulse: { distance: 200, duration: 0.4 },
							},
						},
						particles: {
							color: { value: "#ffffff" },
							links: {
								color: "#ffffff",
								distance: 150,
								enable: true,
								opacity: 0.4,
								width: 1,
							},

							number: {
								density: { enable: true, area: 800 },
								value_area: 180,
							},
							opacity: { value: 0.5 },
							shape: {
								type: "circle",
								stroke: {
									width: 0,
									color: "#000000",
								},
								polygon: {
									nb_sides: 5,
								},
							},
							size: {
								value: 3,
								random: true,
								anim: {
									enable: true,
									speed: 10,
									size_min: 0.1,
									sync: false,
								},
							},
							move: {
								enable: true,
								speed: 6,
								direction: "none",
								random: true,
								straight: false,
								out_mode: "out",
								bounce: true,
								attract: {
									enable: false,
									rotateX: 600,
									rotateY: 1200,
								},
							},
						},
						detectRetina: true,
					}}
				/>
			</section>
		</Layout>
	);
};

export default withRouter(Home);
