import { HTMLIcon, CSSIcon, JSIcon, ReactIcon } from '../icons.jsx'

export function Footer () {
	return (
		<footer className="footer">
			<div className="footer-container">
				<h3 className="footer-h3">Resources</h3>
				<ul className="footer-icons">
					<ReactIcon className="footer-icon react" />
					<JSIcon className="footer-icon js" />
					<CSSIcon className="footer-icon css" />
					<HTMLIcon className="footer-icon html" />
				</ul>
			</div>
			<div className="footer-container-h4">
				<h4 className="footer-h4">© 2024 Moises Sanchez™. All Rights Reserved.</h4>	
			</div>
		</footer>
	)
}