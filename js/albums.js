const CLN = "img/clean-resized/"
const OG = "img/og-resized/"
const albums = [
  {
    name: "AC/DC\nLet There Be Rock", 
    og_image: `${OG}ac-dc-let-there-be-rock.webp`,
    cln_image: `${CLN}ac-dc-let-there-be-rock.webp`
  },
  {
    name: "Audiosalave\nAudioslave", 
    og_image: `${OG}audioslave-audioslave.webp`,
    cln_image: `${CLN}audioslave-audioslave.webp`
  },
  {
    name: "The Beatles\nAbbey Road", 
    og_image: `${OG}beatles-abbey-road.webp`,
    cln_image: `${CLN}beatles-abbey-road.webp`
  },
  {
    name: "The Beatles\nLet It Be", 
    og_image: `${OG}beatles-let-it-be.webp`,
    cln_image: `${CLN}beatles-let-it-be.webp`
  },
  {
    name: "The Beatles\nRevolver", 
    og_image: `${OG}beatles-revolver.webp`,
    cln_image: `${CLN}beatles-revolver.webp`
  },
  {
    name: "The Beatles\nSgt. Peppers Lonely Hearts Club Band", 
    og_image: `${OG}beatles-sgt-peppers-lonely-hearts-club-band.webp`,
    cln_image: `${CLN}beatles-sgt-peppers-lonely-hearts-club-band.webp`
  },
  {
    name: "Black Sabbath\nBlack Sabbath", 
    og_image: `${OG}black-sabbath-black-sabbath.webp`,
    cln_image: `${CLN}black-sabbath-black-sabbath.webp`
  },
  {
    name: "Black Sabbath\nHeaven And Hell", 
    og_image: `${OG}black-sabbath-heaven-and-hell.webp`,
    cln_image: `${CLN}black-sabbath-heaven-and-hell.webp`
  },
  {
    name: "Black Sabbath\nParanoid", 
    og_image: `${OG}black-sabbath-paranoid.webp`,
    cln_image: `${CLN}black-sabbath-paranoid.webp`
  },
  {
    name: "Blue Öyster Cult\nAgents Of Fortune", 
    og_image: `${OG}blue-oyster-cult-agents-of-fortune.webp`,
    cln_image: `${CLN}blue-oyster-cult-agents-of-fortune.webp`
  },
  {
    name: "Bob Dylan\nHighway 61 Revisited", 
    og_image: `${OG}bob-dylan-hwy-62-revisited.webp`,
    cln_image: `${CLN}bob-dylan-hwy-62-revisited.webp`
  },
  {
    name: "Boston\nBoston", 
    og_image: `${OG}boston-boston.webp`,
    cln_image: `${CLN}boston-boston.webp`
  },
  {
    name: "Broder Daniel\nCruel Town", 
    og_image: `${OG}broder-daniel-cruel-town.webp`,
    cln_image: `${CLN}broder-daniel-cruel-town.webp`
  },
  {
    name: "Dio\nHoly Diver", 
    og_image: `${OG}dio-holy-diver.webp`,
    cln_image: `${CLN}dio-holy-diver.webp`
  },
  {
    name: "Fleetwood Mac\nRumours", 
    og_image: `${OG}fleetwood-mac-rumours.webp`,
    cln_image: `${CLN}fleetwood-mac-rumours.webp`
  },
  {
    name: "Graveyard\nHisingen Blues", 
    og_image: `${OG}graveyard-hisingen-blues.webp`,
    cln_image: `${CLN}graveyard-hisingen-blues.webp`
  },
  {
    name: "Graveyard\nPeace", 
    og_image: `${OG}graveyard-peace.webp`,
    cln_image: `${CLN}graveyard-peace.webp`
  },
  {
    name: "Greta Van Fleet\nFrom The Fires", 
    og_image: `${OG}greta-van-fleet-from-the-fires.webp`,
    cln_image: `${CLN}greta-van-fleet-from-the-fires.webp`
  },
  {
    name: "Guns N' Roses\nAppetite For Destruction", 
    og_image: `${OG}guns-n-roses-appetite-for-destruction.webp`,
    cln_image: `${CLN}guns-n-roses-appetite-for-destruction.webp`
  },
  {
    name: "Guns N' Roses\nUse Your Illusion I", 
    og_image: `${OG}guns-n-roses-use-your-illusion-i.webp`,
    cln_image: `${CLN}guns-n-roses-use-your-illusion-i.webp`
  },
  {
    name: "Guns N' Roses\nUse Your Illusion II", 
    og_image: `${OG}guns-n-roses-use-your-illusion-ii.webp`,
    cln_image: `${CLN}guns-n-roses-use-your-illusion-ii.webp`
  },
  {
    name: "Jimi Hendrix\nElectric Ladyland", 
    og_image: `${OG}jimi-hendrix-electric-ladyland.webp`,
    cln_image: `${CLN}jimi-hendrix-electric-ladyland.webp`
  },
  {
    name: "Johnny Cash\nAt Folsom Prison", 
    og_image: `${OG}johnny-cash-at-folsom-prison.webp`,
    cln_image: `${CLN}johnny-cash-at-folsom-prison.webp`
  },
  {
    name: "Journey\nEscape (ESC4P3)", 
    og_image: `${OG}journey-escape.webp`,
    cln_image: `${CLN}journey-escape.webp`
  },
  {
    name: "Kansas\nPoint Of No Return",
    og_image: `${OG}kansas-point-of-no-return.webp`,
    cln_image: `${CLN}kansas-point-of-no-return.webp`
  },
  {
    name: "Led Zeppelin\nIV", 
    og_image: `${OG}led-zeppelin-iv.webp`,
    cln_image: `${CLN}led-zeppelin-iv.webp`
  },
  {
    name: "Led Zeppelin\nPhysical Graffiti", 
    og_image: `${OG}led-zeppelin-physical-graffiti.webp`,
    cln_image: `${CLN}led-zeppelin-physical-graffiti.webp`
  },
  {
    name: "Meatloaf\nBat Out Of Hell II", 
    og_image: `${OG}meatloaf-bat-out-of-hell-ii.webp`,
    cln_image: `${CLN}meatloaf-bat-out-of-hell-ii.webp`
  },
  {
    name: "Metallica\nMetallica", 
    og_image: `${OG}metallica-metallica.webp`,
    cln_image: `${CLN}metallica-metallica.webp`
  },
  {
    name: "Metallica\nMaster Of Puppets", 
    og_image: `${OG}metallica-master-of-puppets.webp`,
    cln_image: `${CLN}metallica-master-of-puppets.webp`
  },
  {
    name: "Metallica\nRide The Lightning ", 
    og_image: `${OG}metallica-ride-the-lightning.webp`,
    cln_image: `${CLN}metallica-ride-the-lightning.webp`
  },
  {
    name: "Nirvana\nIn Utero", 
    og_image: `${OG}nirvana-in-utero.webp`,
    cln_image: `${CLN}nirvana-in-utero.webp`
  },
  {
    name: "Oasis\nWhat's The Story Morning Glory", 
    og_image: `${OG}oasis-whats-the-story-morning-glory.webp`,
    cln_image: `${CLN}oasis-whats-the-story-morning-glory.webp`
  },
  {
    name: "Ozzy Osbourne\nBlizzard Of Ozz", 
    og_image: `${OG}ozzy-osbourne-blizzard-of-ozz.webp`,
    cln_image: `${CLN}ozzy-osbourne-blizzard-of-ozz.webp`
  },
  {
    name: "Pink Floyd\nDark Side Of The Moon", 
    og_image: `${OG}pink-floyd-dark-side-of-the-moon.webp`,
    cln_image: `${CLN}pink-floyd-dark-side-of-the-moon.webp`
  },
  {
    name: "Pink Floyd\nWish Your Where Here", 
    og_image: `${OG}pink-floyd-wish-you-where-here.webp`,
    cln_image: `${CLN}pink-floyd-wish-you-where-here.webp`
  },
  {
    name: "Pixies\nSurfer Rosa", 
    og_image: `${OG}pixies-surfer-rosa.webp`,
    cln_image: `${CLN}pixies-surfer-rosa.webp`
  },
  {
    name: "Queen\nA Night At The Opera", 
    og_image: `${OG}queen-a-night-at-the-opera.webp`,
    cln_image: `${CLN}queen-a-night-at-the-opera.webp`
  },
  {
    name: "Queens Of The Stoneage\nA Song For The Deaf", 
    og_image: `${OG}queens-of-the-stoneage-a-song-for-the-deaf,webp`,
    cln_image: `${CLN}queens-of-the-stoneage-a-song-for-the-deaf,webp`
  },
  {
    name: "Queens Of The Stoneage\nEra Vulgaris", 
    og_image: `${OG}queens-of-the-stoneage-era-vulgaris`,
    cln_image: `${CLN}queens-of-the-stoneage-era-vulgaris`
  },
  {
    name: "Rage Against The Machine\nRage Against The Machine", 
    og_image: `${OG}rage-against-the-machine-rage-against-the-machine.webp`,
    cln_image: `${CLN}rage-against-the-machine-rage-against-the-machine.webp`
  },
  {
    name: "Rainbow\nDown To Earth", 
    og_image: `${OG}rainbow-down-to-earth.webp`,
    cln_image: `${CLN}rainbow-down-to-earth.webp`
  },
  {
    name: "Ramones\nRamones", 
    og_image: `${OG}ramones-ramones.webp`,
    cln_image: `${CLN}ramones-ramones.webp`
  },
  {
    name: "Red Hot Chili Peppers\nBy The Way", 
    og_image: `${OG}red-hot-chili-peppers-by-the-way.webp`,
    cln_image: `${CLN}red-hot-chili-peppers-by-the-way.webp`
  },
  {
    name: "Red Hot Chili Peppers\nCalifornication", 
    og_image: `${OG}red-hot-chili-peppers-californication.webp`,
    cln_image: `${CLN}red-hot-chili-peppers-californication.webp`
  },
  {
    name: "System Of A Down\nToxicity", 
    og_image: `${OG}system-of-a-down-toxicity.webp`,
    cln_image: `${CLN}system-of-a-down-toxicity.webp`
  },
  {
    name: "The Eagles\nHotel California", 
    og_image: `${OG}the-eagles-hotel-california.webp`,
    cln_image: `${CLN}the-eagles-hotel-california.webp`
  },
  {
    name: "The Hellacopters\nHigh Visibility", 
    og_image: `${OG}the-hellacopters-high-visibility.webp`,
    cln_image: `${CLN}the-hellacopters-high-visibility.webp`
  },
  {
    name: "The Who\nWho's Next", 
    og_image: `${OG}the-who-whos-next.webp`,
    cln_image: `${CLN}the-who-whos-next.webp`
  },
  {
    name: "Wolfmother\nWolfmother", 
    og_image: `${OG}wolfmother-wolfmother.webp`,
    cln_image: `${CLN}wolfmother-wolfmother.webp`
  }
]