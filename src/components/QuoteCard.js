// import './QuoteCard.css'; 

// const QuoteCard = (props) => {
//     const {simpsons} = props
//     console.log(simpsons)

//     return (
//     <figure className="QuoteCard">
//         <img src={simpsons.image} alt={simpsons.character} />
//         <figcaption>
//         <blockquote>{simpsons.quote}</blockquote>
//         <cite>{simpsons.character}</cite>
//         </figcaption>
//     </figure>
// )};

// export default QuoteCard; 

import './QuoteCard.css'; 

const QuoteCard = (props) => {
    const {quote, image, character} = props
  

    return (
    <figure className="QuoteCard">
        <img src={image} alt={character} />
        <figcaption>
        <blockquote>{quote}</blockquote>
        <cite>{character}</cite>
        </figcaption>
    </figure>
)};

export default QuoteCard; 
