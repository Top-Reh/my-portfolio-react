import React from "react";
import Contant from './contant.js';
import './style.css'

export default function Tester() {
    const thing = ["a1","a2"];
    function clickandadd( ) {
      const thinglength = `a${thing.length +1}`
      thing.push(thinglength);
      console.log(thing);
    }
    function Greeting(theauthor) {
    const date = new Date();
    const hours = date.getHours();
    let facts;
    if (hours <= 4) {
      facts = "night";
    } else if (hours <= 12) {
      facts = "morning";
    } else if (hours <= 16) {
      facts = "afternoon";
    } else if (hours <= 20) {
      facts = "evening";
    } else {
      facts = "night";
    } 
    const result = React.useState("Good");
    console.log(result)
    console.log(result[0]+facts+ ' ' +theauthor.name)
    const [vir,fun] = React.useState("link");
    console.log(vir);
    function funForfun() {
    fun('otherlink');
    }
    console.log(funForfun)
  }
  return (
    <div className='container'>
      <Contant 
        id='1'
        img="https://th.bing.com/th/id/OIP.UmQlynMptL0oLuBCpV3qxAHaEu?rs=1&pid=ImgDetMain"
        name="The cat"
        about="Even though humans have lived with cats for more than 10,000 years and it can sometimes feel like we know our cats like the back of our hand there’s A LOT to know about cats. I’ve scoured the internet and surveyed cat-loving veterinarians to put together the most complete list of cat facts there is!"
      />
      <Contant 
        id='2'
        img="https://th.bing.com/th/id/R.c36e36ee08241ca5f101110d1cd2dbec?rik=2bOHJXCbkcsSFQ&riu=http%3a%2f%2fwww.warrenphotographic.co.uk%2fphotography%2fbigs%2f35571-Two-cute-tabby-kittens-on-beige-background.jpg&ehk=iYTK1FJCdrSBk0CI1gZg%2fcJ5huqVIPE16PaxCM06R5o%3d&risl=&pid=ImgRaw&r=0"
        name="The twin"
        about="Female domestic cats can have kittens from spring to late autumn in temperate zones and throughout the year in equatorial regions, with litter sizes often ranging from two to five kittens."
      />
      <Contant 
        id='3'
        img="https://th.bing.com/th/id/R.1b402250bd02cb1bec9d8c4c60d5ef4a?rik=LnQaSfEPqgBOKQ&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f16100000%2fBeautiful-Cat-cats-16124046-1280-800.jpg&ehk=r3nQXVxJ4o47M9aHHnEFVhlvSZCWBJriGI8GtCosGm0%3d&risl=&pid=ImgRaw&r=0"
        name="The white"
        about="But when I look at most cat fact sites, all I see are single lines of texts with no background information or real understanding. I’m left more confused than when I started! So I wanted to create a comprehensive list of cat facts with background details and a reference (in most cases) so you can learn even more."
      />
      <Contant 
        id='4'
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1024px-Cat_August_2010-4.jpg"
        name="The white"
        about="I know, it’s an ambitious goal but after more than  75+ hours of research and writing (along with a decade of feline experience to back it up) I think I’m close."
      />
      <Contant 
        id='5'
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gustav_chocolate.jpg/800px-Gustav_chocolate.jpg"
        name="The white"
        about="According to Wikipedia, Stubbs attracted 30 to 40 tourists a day who were all eager to meet the mayor. While that may not sound like a lot, the total population of Talkeetna in 2010 was 876 people so that’s actually quite the flood of people."
      />
      <Contant 
        id='6'
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"
        name="The white"
        about=" While Stubbs seemed to be a fair mayor, he was known to indulge from time to time. It’s reported that every afternoon, Stubbs would visit a local restaurant where he drank catnip infused water out of a wineglass."
      />
      <button onClick={clickandadd}>click</button>
      <Greeting name='Top'/>
    </div>
  )
}