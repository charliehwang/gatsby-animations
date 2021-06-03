import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useSpring, animated, config, to, height } from 'react-spring'
import { useMeasure } from 'react-measure'


const IndexPage = () => {
	const title = "react-spring Simple Element Animation"

	// const [bind, { height }] = useMeasure()
	const animStyle = useSpring({
		// loop: { reverse: true },
		config: config.wobbly,
		from: { opacity: 0 },
		to: { opacity: 1 },
		delay: 500
	})

	return (
		<Layout>
			<Seo title="{title}" />

			<animated.div style={{ ...animStyle }}>
				<div className="p-4 bg-blue-500">FadeMeIn</div>
			</animated.div>

		</Layout>
	)

}
export default IndexPage
