import styles from "../../styles/Hero.module.css";
import Image from 'next/image';

const imgArr = [
    "Coding Blocks.jpeg",
    "Coding Minutes.jpeg",
    "Coding Ninjas.jpeg",
    "devfolio.png",
    "Digital Ocean.png",
    "Geeksforgeeks.jpeg",
    "GitHub.png",
    "Jet Brains.png",
    "MLH.png",
    "Moralis.png",
    "Prepbytes.PNG",
    "Solana.png",
    "Streamyard.png",
    "extra/.xyz.png",
    "extra/Axure.png",
    "extra/Balsamiq.png",
    "extra/Celo.png",
    "extra/Clerky.png",
    "extra/Filecoin.png",
    "extra/Give My Certificate.png",
    "extra/Hack Club.png",
    "extra/Interview Buddy.png",
    "extra/Polygon.png",
    "extra/Sawo Labs.png",
    "extra/Taskade.png",
    "extra/tezos.png",
    "extra/Wolfram.png"
]

function getMultiSponsor() {
    let lst = [];
    for (let i in imgArr) {
        console.log(i);
        lst.push(
            <div className={styles.sponsorSlide}>
                <Image
                    src={`/images/Sponsors/${imgArr[i]}`}
                    height={100}
                    width={100}
                    alt="Jet Brains"
                />
            </div>
        )
    }
    return lst  
}
export {getMultiSponsor};