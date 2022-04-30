import React from 'react';
import Image from 'next/image';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      onClick: false,
      feels: "/img/feelsbad.png",
      play: false
    }
  }

  componentDidMount() {
    this.url = "/sound.m4a";
    this.audio = new Audio(this.url);
  }

  onClick = () => {
    this.setState({
      onClick: true,
      feels: "/img/feels.png",
      play: this.audio.play()
    })
  }

  render() {
    return (
      <div className='container w-1/2 flex items-center justify-center h-screen flex-col space-y-20'>
        <div>
          <h1 className='animate-text font-mono text-4xl tracking-[1.8229166666666667vw] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500'>Quick feels good</h1>
        </div>
        <div>
          <div style={{backgroundImage: `url(${this.state.feels})`, backgroundClip: "border-box", backgroundSize: "cover", width: 429, height: 369}} onClick={this.onClick}></div>
          {/* <Image src={this.state.feels} alt='peg' width={429} height={369} draggable={false} onClick={this.onClick} /> */}
        </div>
        <div>
          <h2 className='font-mono text-2xl tracking-[1.8229166666666667vw] dark:text-white text-black'>
            {this.state.onClick ? "Feels Good" : "Feels Bad"}
          </h2>
        </div>
        <footer className='flex items-center justify-center w-full'>
          <a href='https://www.umutk.codes' className='dark:text-white text-black border-2 rounded-md p-1 border-sky-500 hover:border-sky-600 transition delay-100 ease-in-out'>Umut K.</a>
        </footer>
      </div>
    );
  }
}

export default Index;