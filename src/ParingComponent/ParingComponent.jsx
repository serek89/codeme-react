const ParingComponent = (props) => {
    console.log(props);
    return (
        <>as { props.playerOne.name } vs. { props.playerTwo.name }</>
    );
}

export default ParingComponent;
