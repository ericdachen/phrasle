import dict from "./dict";

const getPhrase = () => {
    const index = (Math.random() * 100).toFixed() - 1;
    return (dict[index]);
}

export default getPhrase;