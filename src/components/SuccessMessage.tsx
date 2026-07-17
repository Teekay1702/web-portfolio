import Button from "./Button";
import Icon from "./Icon";

interface Props {
    onReset: () => void;
}

export default function SuccessMessage({
    onReset,
}: Props) {
    return (
        <div className="success">

            <Icon
                name="check"
                size={40}
            />

            <h3>
                Message Sent Successfully!
            </h3>

            <p>
                Thank you for reaching out.
                I'll get back to you as soon as
                possible.
            </p>

            <Button
                onClick={onReset}
            >
                Send Another Message
            </Button>

        </div>
    );
}