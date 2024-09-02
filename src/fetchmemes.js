import React from "react";

/*function FetchMemes() {
    const [memes,setMemes] = useState([]);
    useEffect(() => {
        const FetchMemes = async () => {
            const memelink = await fetch('https://api.memegen.link/templates');
            const datalink = await memelink.json();
            setMemes(datalink);
            console.log(datalink);
          };
          FetchMemes();
    },[]);
    return (
        <div>
            {memes.map((meme)=> {
                <img key={meme.id} src="{meme.blank}"/>
            })}
        </div>
    )
}*/

const FetchMemes = () => {
    const gig = async () => {
        const memelink = await fetch('https://api.memegen.link/templates');
        const datalink = await memelink.json();
        console.log(datalink);
        return (
            <div>
                {datalink.map((meme) => {
                    <img key={meme.id} src="{meme.blank}"/>
                })}
            </div>
        )
      };
      gig();
}