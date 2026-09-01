export default function Price(props) {
    const formatPrice = props.value / 100;

    if(props.showDecimals) {
        return <p>The price is {props.currency}{formatPrice.toFixed(2)}</p>;
    } else {
        return <p>The price is {props.currency}{props.value}</p>;
    }
}