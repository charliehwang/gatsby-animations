import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Portal from "../components/portal"



const IndexPage = () => {
	const title = "Create Portal"

	const [isOpen, setOpen] = useState(false)

	// const [bind, { height }] = useMeasure()
	const toggleOpen = () => setOpen(!isOpen)

	return (
		<Layout>
			<Seo title="{title}" />
			<div id="portal"></div>

			<button className="bg-green-800 p-5" onClick={toggleOpen}>Click</button>

			{isOpen && <Portal onClose={toggleOpen}>
				<div className="p-4 bg-blue-500">FadeMeIn</div>
			</Portal>}

		</Layout >
	)

}
export default IndexPage
