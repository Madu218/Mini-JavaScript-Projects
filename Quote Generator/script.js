const textos = [{
    quote: "\"Women don't need to find a voice, they have a voice, and they need to feel empowered to use it, and people need to be encouraged to listen.\"",
    person: "Meghan Markle"
}, {
    quote: "\"Life isn't how to survive the storm; it's about how to dance in the rain.\"",
    person: "Taylor Swift"
}, {
    quote: "\"When you undervalue what you do, the world will undervalue who you are.\"",
    person:"Oprah Winfrey"
}, {
    quote: "\"The most common way people give up their power is by thinking they don't have any.\"",
    person:"Alice Walker"
}, {
    quote: "\"If you are silent about your pain, they'll kill you and say you enjoyed it.\"",
    person:"Zora Neale Hurston"
}, {
    quote: "\"I attribute my sucess to this: I never gave or took an excuse.\"",
    person:"Florence Nightingale"
}, {
    quote: "\"Nothing in life is to be feared; it is only to be understood.\"",
    person:"Marie Curie"
}, {
    quote:"\"I am learning every day to allow the space between where I am and where I want to be to inspire me and not terrify me.\"",
    person:"Tracee Ellis Ross"
}, {
    quote: "\"Our Lord does not look so much at the greatness of out actions, or even at their difficulty, as at the love with which we do them.\"",
    person:"St. Thérèse of Lisieux"
}, {
    quote: "\"If you can dance and be free and not be embarrassed, you can rule the world.\"",
    person:"Amy Poehler"
}, {
    quote: "\"The content of a book holds the power of education and it is with this power that we can shape our future and change lives.\"",
    person:"Malala Yousafzai"
}, {
    quote: "\"Dreams are lovely. But they are just dreams. Fleeting, ephemeral. Pretty. But dreams do not come true just because you dream them. It's hard work that makes things happen. It's hard work that creates change.\"",
    person: "Shonda Rhimes"
}, {
    quote: "\"Nothing is absolute. Everything changes, everything moves, everything revolves, everything flies and goes away.\"",
    person: "Frida Kahlo"
}, {
    quote: "\"Once I learned to like me more than others did, then I didn't have to worry about being the funniest or the most popular or the prettiest. I was the best me and I only ever tried to be that.\"",
    person: "Issa Rae"
}, {
    quote: "\"If your actions create a legacy that inspires others to dream more, learn more, do more and become more, then, you are an excellent leader.\"",
    person: "Dolly Parton"
}, {
    quote: "\"Women are leaders everywhere you look—from the CEO who runs a Fortune 500 company to the housewife who raises her children and heads her household. Our country was built by strong women, and we will continue to break down walls and defy stereotypes.\"",
    person: "Nancy Pelosi"
}, {
    quote: "\"We must reject not only the stereotypes that others hold of us, but also the stereotypes that we hold of ourselves.\"",
    person: "Shirley Chisholm"
}, {
    quote: "\"Women that believe in each other can survive anything. Women who believe in each other create armies that will win kingdoms and wars.\"",
    person: "Nikita Gill"
}, {
    quote: "\"There's something special about a woman who dominates in a man's world. It takes a certain grace, strength, intelligence, fearlessness, and the nerve to never take no for an answer.\"",
    person:"Rihanna"
}, {
    quote: "\"I am not afraid of storms for I am learning how to sail my ship.\"",
    person:"Louisa May Alcott"
}
];

const quote = document.querySelector('p');
const btn = document.querySelector('button');
const person = document.querySelector('h3');

btn.addEventListener('click', () => {
    const index = Math.floor(Math.random() * (textos.length-1));
    quote.innerText = textos[index].quote;
    person.innerText = textos[index].person;
});