import {Component} from 'react'
import {
  OuterDiv,
  HeadingEl,
  BgImageDiv,
  InnerDiv1,
  InputEl,
  SelectEl,
  ButtonEl,
  ParaEl,
  OptionsEl,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imagePic: '',
    fontSizeValue: fontSizesOptionsList[0].displayText,
    topText: '',
    bottomText: '',
    display: false,
  }

  changedOption = e => {
    // console.log(e.target.value)
    this.setState({fontSizeValue: e.target.value})
  }

  changingTopText = e => {
    this.setState({topText: e.target.value})
  }

  changingBottomText = e => {
    this.setState({bottomText: e.target.value})
  }

  changingImage = e => {
    console.log(e.target.value)
    this.setState({imagePic: `url("${e.target.value}")`})
  }

  generateClickFunc = () => {
    this.setState(prevState => ({display: !prevState.display}))
  }

  render() {
    const {fontSizeValue, imagePic, topText, bottomText, display} = this.state
    // console.log(fontSizeValue)
    return (
      <OuterDiv direction="row">
        <InnerDiv1 direction="column">
          <HeadingEl>Meme Generator</HeadingEl>
          <form>
            <label htmlFor="input1">Image URL</label>
            <InputEl onChange={this.changingImage} id="input1" type="text" />
            <label htmlFor="input2">Top Text</label>
            <InputEl onChange={this.changingTopText} id="input2" type="text" />
            <label htmlFor="input3">Bottom Text</label>
            <InputEl
              onChange={this.changingBottomText}
              id="input3"
              type="text"
            />
            <label htmlFor="selectEl">Font Size</label>
            <SelectEl onChange={this.changedOption} id="selectEl">
              {fontSizesOptionsList.map(each => (
                <OptionsEl key={each.optionId} name={each.displayText}>
                  {each.displayText}
                </OptionsEl>
              ))}
            </SelectEl>
            <ButtonEl onClick={this.generateClickFunc}>Generate</ButtonEl>
          </form>
        </InnerDiv1>
        {display ? (
          <BgImageDiv imagePic={imagePic} data-testid="meme">
            <ParaEl fontSizeValue={fontSizeValue}>{topText}</ParaEl>
            <ParaEl fontSizeValue={fontSizeValue}>{bottomText}</ParaEl>
          </BgImageDiv>
        ) : null}
      </OuterDiv>
    )
  }
}
export default MemeGenerator
