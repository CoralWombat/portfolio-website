import React from "react";

class Tag extends React.Component {
    render() {
        return <p className={"rounded-full py-2 px-4 font-normal text-custom-light " + this.getBgColor(this.props.level)}>
            {this.getText(this.props.level)}
        </p>
    }

    getText(level) {
        switch (level) {
            case 1:
                return "Novice";
            case 2:
                return "Intermediate";
            case 3:
                return "Advanced";
            case 4:
                return "Expert";
            default:
                return "";
        }
    }

    getBgColor(level) {
        switch (level) {
            case 1:
                return "bg-blue-500";
            case 2:
                return "bg-green-500";
            case 3:
                return "bg-orange-500";
            case 4:
                return "bg-red-500";
            default:
                return "";
        }
    }
}

export default Tag;