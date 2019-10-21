import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
	render() {

		if (!this.props.show) {
			return null;
		}

		const backgroundStyle = {
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			backgroundColor: 'rgba(0,0,0,0.3)',
			padding: 0,
			width: "100%",
			height: "100%",
			overflow: "auto",
			transition: "all 1s ease-in-out"
		};

		const small = {
			backgroundColor: '#fff',
			borderRadius: 5,
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%,-50%)",
			transition: "all 1s ease-in-out",
			minWidth: "25%",
			minHeight: "25%"
		};

		const medium = {
			backgroundColor: '#fff',
			borderRadius: 5,
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%,-50%)",
			transition: "all 1s ease-in-out",
			minWidth: "50%",
			minHeight: "50%"
		};

		const large = {
			backgroundColor: '#fff',
			borderRadius: 5,
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%,-50%)",
			transition: "all 1s ease-in-out",
			minWidth: "75%",
			minHeight: "75%"
		};

		const full = {
			backgroundColor: '#fff',
			borderRadius: 5,
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%,-50%)",
			transition: "all 1s ease-in-out",
			minWidth: "100%",
			minHeight: "100%"
		};

		const headerStyle = {
			padding: "20px",
			minHeight: "calc(5vh)"
		};

		const footerStyle = {
			padding: "10px 20px",
			minHeight: "calc(5vh)"
		};

		const contentStyle = {
			padding: "20px",
			minHeight: "calc(50vh)"
		};

		const close = {
			position: "absolute",
			right: "10px",
			top: "10px"
		};

		const line = {
			margin: "0",
			padding: "0"
    };

    let decision = "";
    
    if(this.props.modalSize === "small"){

      decision = small;

    } else if(this.props.modalSize === "medium"){

      decision = medium;

    } else if(this.props.modalSize === "large"){

      decision = large;

    } else if(this.props.modalSize === "full"){

      decision = full;

    } else {

      decision = medium;

    }

		return (
			<div id="simpleModal" className="backdrop" style={backgroundStyle}>
				<div id="modal" style={decision}>
					<div className="header" style={headerStyle}>
						<div>
							{this.props.headline}
						</div>
						<div onClick={this.props.close} style={close}>
							x
						</div>
					</div>
					<hr style={line} />
					<div className="content" style={contentStyle}>
						<div>
							{this.props.children}
						</div>
					</div>
					<hr style={line} />
					<div className="footer" style={footerStyle}>
						<div>
							{this.props.footer}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	headline: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	footer: PropTypes.string.isRequired,
	modalSize: PropTypes.oneOf(['small', 'medium', 'large', 'full']).isRequired,
	close: PropTypes.func.isRequired,
	show: PropTypes.bool,
}
