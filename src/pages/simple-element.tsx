import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useSpring, animated, config, to } from 'react-spring'


const IndexPage = () => {
	const title = "react-spring Simple Element Animation"
	const animProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

	const { number } = useSpring({
		reset: true,
		// reverse: flip,
		from: { number: 0 },
		number: 1,
		delay: 200,
		config: config.molasses,
		// onRest: () => set(!flip),
	})

	const { o, xyz, color } = useSpring({
		from: { o: 0, xyz: [0, 0, 0], color: 'red' },
		o: 1,
		xyz: [10, 20, 5],
		color: 'green',
		config: config.molasses
	})

	return (
		<Layout>
			<Seo title="{title}" />

			<animated.div style={animProps}>
				<p className="bg-blue-500">{title}</p>
			</animated.div>

			<animated.div>
				{number.to(n => n.toFixed(2))}
			</animated.div>

			<animated.div
				style={{
					// If you can, use plain animated values like always, ...
					// You would do that in all cases where values "just fit"
					color,
					// Unless you need to interpolate them
					background: o.to(o => `rgba(210, 57, 77, ${o})`),
					// Which works with arrays as well
					transform: xyz.to((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
					// If you want to combine multiple values use the "interpolate" helper
					border: to([o, color], (o, c) => `${o * 10}px solid ${c}`),
					// You can also form ranges, even chain multiple interpolations
					padding: o
						.to({ range: [0, 0.5, 1], output: [0, 0, 10] })
						.to(o => `${o}%`),
					// Interpolating strings (like up-front) through ranges is allowed ...
					borderColor: o.to({ range: [0, 1], output: ['red', '#ffaabb'] }),
					// There's also a shortcut for plain, optionless ranges ...
					opacity: o.to([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1]),
				}}>
				{o.to(n => n.toFixed(2)) /* innerText interpolation ... */}
			</animated.div>

		</Layout>
	)

}
export default IndexPage
