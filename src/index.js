import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./styles.css";

const data = [
  {
    name: "Alabama",
    population: 4780127,
    capital: "Montgomery",
    region: "South"
  },
  { name: "Alaska", population: 710249, capital: "Juneau", region: "West" },
  { name: "Arizona", population: 6392307, capital: "Phoenix", region: "West" },
  {
    name: "Arkansas",
    population: 2915958,
    capital: "Little Rock",
    region: "South"
  },
  {
    name: "California",
    population: 37254503,
    capital: "Sacramento",
    region: "West"
  },
  { name: "Colorado", population: 5029324, capital: "Denver", region: "West" },
  {
    name: "Connecticut",
    population: 3574118,
    capital: "Hartford",
    region: "Northeast"
  },
  { name: "Delaware", population: 897936, capital: "Dover", region: "South" },
  {
    name: "Florida",
    population: 18804623,
    capital: "Tallahassee",
    region: "South"
  },
  { name: "Georgia", population: 9688681, capital: "Atlanta", region: "South" },
  { name: "Hawaii", population: 1360301, capital: "Honolulu", region: "West" },
  { name: "Idaho", population: 1567652, capital: "Boise", region: "West" },
  {
    name: "Illinois",
    population: 12831549,
    capital: "Springfield",
    region: "Midwest"
  },
  {
    name: "Indiana",
    population: 6484229,
    capital: "Indianapolis",
    region: "Midwest"
  },
  {
    name: "Iowa",
    population: 3046869,
    capital: "Des Moines",
    region: "Midwest"
  },
  { name: "Kansas", population: 2853132, capital: "Topeka", region: "Midwest" },
  {
    name: "Kentucky",
    population: 4339349,
    capital: "Frankfort",
    region: "South"
  },
  {
    name: "Louisiana",
    population: 4533479,
    capital: "Baton Rouge",
    region: "South"
  },
  {
    name: "Maine",
    population: 1328361,
    capital: "Augusta",
    region: "Northeast"
  },
  {
    name: "Maryland",
    population: 5773785,
    capital: "Annapolis",
    region: "South"
  },
  {
    name: "Massachusetts",
    population: 6547817,
    capital: "Boston",
    region: "Northeast"
  },
  {
    name: "Michigan",
    population: 9884129,
    capital: "Lansing",
    region: "Midwest"
  },
  {
    name: "Minnesota",
    population: 5303925,
    capital: "Saint Paul",
    region: "Midwest"
  },
  {
    name: "Mississippi",
    population: 2968103,
    capital: "Jackson",
    region: "South"
  },
  {
    name: "Missouri",
    population: 5988927,
    capital: "Jefferson City",
    region: "Midwest"
  },
  { name: "Montana", population: 989417, capital: "Alberta", region: "West" },
  {
    name: "Nebraska",
    population: 1826341,
    capital: "Lincoln",
    region: "Midwest"
  },
  {
    name: "Nevada",
    population: 2700691,
    capital: "Carson City",
    region: "West"
  },
  {
    name: "New Hampshire",
    population: 1316466,
    capital: "Concord",
    region: "Northeast"
  },
  {
    name: "New Jersey",
    population: 8791936,
    capital: "Trenton",
    region: "Northeast"
  },
  {
    name: "New Mexico",
    population: 2059192,
    capital: "Santa Fe",
    region: "West"
  },
  {
    name: "New York",
    population: 19378087,
    capital: "Albany",
    region: "Northeast"
  },
  {
    name: "North Carolina",
    population: 9535692,
    capital: "Raleigh",
    region: "South"
  },
  {
    name: "North Dakota",
    population: 672591,
    capital: "Bismarck",
    region: "Midwest"
  },
  {
    name: "Ohio",
    population: 11536725,
    capital: "Columbus",
    region: "Midwest"
  },
  {
    name: "Oklahoma",
    population: 3751616,
    capital: "Oklahoma City",
    region: "South"
  },
  { name: "Oregon", population: 3831073, capital: "Salem", region: "West" },
  {
    name: "Pennsylvania",
    population: 12702887,
    capital: "Harrisburg",
    region: "Northeast"
  },
  {
    name: "Rhode Island",
    population: 1052931,
    capital: "Providence",
    region: "Northeast"
  },
  {
    name: "South Carolina",
    population: 4625401,
    capital: "Columbia",
    region: "South"
  },
  {
    name: "South Dakota",
    population: 814191,
    capital: "Pierre",
    region: "Midwest"
  },
  {
    name: "Tennessee",
    population: 6346275,
    capital: "Nashville",
    region: "South"
  },
  { name: "Texas", population: 25146105, capital: "Austin", region: "South" },
  {
    name: "Utah",
    population: 2763888,
    capital: "Salt Lake City",
    region: "West"
  },
  {
    name: "Vermont",
    population: 625745,
    capital: "Montpelier",
    region: "Northeast"
  },
  {
    name: "Virginia",
    population: 8001045,
    capital: "Richmond",
    region: "South"
  },
  {
    name: "Washington",
    population: 6724543,
    capital: "Olympia",
    region: "West"
  },
  {
    name: "West Virginia",
    population: 1853011,
    capital: "Charleston",
    region: "South"
  },
  {
    name: "Wisconsin",
    population: 5687289,
    capital: "Madison",
    region: "West"
  },
  { name: "Wyoming", population: 563767, capital: "Cheyenne", region: "West" }
];

class App extends React.Component {
  onInputChange = event => {
    // console.log(event.target.value);
  };

  onChange = values => {
    // console.log(values);
  };

  render() {
    return (
      <>
        <h1>Welcome to my typeahead.</h1>
        <Typeahead
          onChange={this.onChange}
          onInputChange={this.onInputChange}
          options={data.map(x => x.name)}
          multiSelect={true}
          clearFilter={true}
          tokenBreaks={[",", ";"]}
          value={"al"}
        />
      </>
    );
  }
}

const rowHeight = 36;
const optionsHeight = 300;

class Typeahead extends React.Component {
  static propTypes = {
    /**
     * commonly overridden style properties.
     */
    zIndex: PropTypes.number,

    /**
     * standard input properties
     */
    autocomplete: PropTypes.bool,
    placeholder: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onInputChange: PropTypes.func,
    value: PropTypes.string,

    /**
     * classModifications
     */
    inputContainerClass: PropTypes.string,
    overrideInputContainerClass: PropTypes.bool,

    inputClass: PropTypes.string,
    overrideInputClass: PropTypes.bool,

    optionsClass: PropTypes.string,
    overrideOptionsClass: PropTypes.bool,

    optionClass: PropTypes.string,
    overrideOptionClass: PropTypes.bool,

    /**
     * component-specific properties
     */
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.arrayOf(PropTypes.string),
    multiSelect: PropTypes.bool,
    clearFilter: PropTypes.bool,
    tokenBreaks: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    selected: [],
    tokenBreaks: []
  };

  constructor(props) {
    super(props);

    this.dropdownOptions = React.createRef();
    this.focusedOption = React.createRef();
    this.input = React.createRef();
    this.inputContainer = React.createRef();
  }

  state = {
    focused: false,
    /**
     * selected it used when multi-select is true, otherwise use term.
     */
    selected: this.props.selected,
    term: this.props.value || ""
  };

  componentDidMount() {
    this.matchOptions();
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
  }

  componentDidUpdate() {
    console.log(this.state.focusedOption);
    if (this.focusedOption.current) {
      if (
        this.focusedOption.current.offsetTop >
        this.dropdownOptions.current.clientHeight +
          this.dropdownOptions.current.scrollTop -
          rowHeight
      ) {
        this.dropdownOptions.current.scrollTop =
          this.focusedOption.current.offsetTop + rowHeight - optionsHeight;
      } else if (
        this.focusedOption.current.offsetTop <
        this.dropdownOptions.current.scrollTop
      ) {
        this.dropdownOptions.current.scrollTop = this.focusedOption.current.offsetTop;
      }
    }
  }

  handleDocumentClick = event => {
    let node = event.target;

    while (node != null) {
      if (
        node === this.inputContainer.current ||
        (node.classList != null &&
          node.classList.contains("matching-option")) ||
        (node.classList != null && node.classList.contains("missing-option")) ||
        (node.classList != null && node.classList.contains("token"))
      ) {
        return;
      }

      node = node.parentNode;
    }

    document.removeEventListener("click", this.handleDocumentClick);
    this.setState({
      focused: false
    });
  };

  handleFocus = event => {
    this.setState({
      focused: true,
      focusedOption: this.props.options[0]
    });

    document.addEventListener("click", this.handleDocumentClick);

    this.props.onFocus(event);
  };

  handleBlur = event => {
    this.props.onBlur(event);
  };

  handleUpdateSelection = option => {
    if (this.props.multiSelect) {
      this.setState(
        ({ selected, term }) => ({
          selected: [...selected, option],
          focused: this.props.multiSelect,
          term: this.props.clearFilter ? "" : term
        }),
        () => {
          this.matchOptions();
          this.handleKeyDown({ key: "ArrowDown" });
          this.props.onChange(this.state.selected);
        }
      );
    } else {
      this.input.current.blur();
      this.setState({
        term: option,
        focused: false
      });
    }
  };

  handleRemoveOption = option => {
    this.setState(
      ({ selected }) => ({
        selected: selected.filter(x => x !== option),
        focused: this.props.multiSelect
      }),
      () => {
        this.props.onChange(this.state.selected);
      }
    );
  };

  handleChange = event => {
    this.setState(
      {
        term: event.target.value
      },
      () => this.matchOptions()
    );

    this.props.onInputChange(event);
  };

  handleMouseEnter = option => {
    this.setState({
      focusedOption: option
    });
  };

  handleKeyDown = event => {
    const key = event.key;
    if (key === "Enter" || this.props.tokenBreaks.includes(key)) {
      event.preventDefault();
      event.stopPropagation();
      this.handleUpdateSelection(this.state.focusedOption);
    } else if (
      key === "Backspace" &&
      event.target.value === "" &&
      this.state.selected.length !== 0
    ) {
      this.setState(({ selected }) => ({
        selected: selected.slice(0, selected.length - 1)
      }));
    } else {
      const { matching, remaining, focusedOption } = this.state;
      if (key === "ArrowDown") {
        if (remaining.slice(-1).includes(focusedOption)) {
          return;
        } else if (matching.slice(-1).includes(focusedOption)) {
          this.setState({
            focusedOption: remaining[0]
          });
        } else if (remaining.includes(focusedOption)) {
          const idx = remaining.indexOf(focusedOption);
          this.setState({
            focusedOption: remaining[idx + 1]
          });
        } else {
          const idx = matching.indexOf(focusedOption);
          this.setState({
            focusedOption: matching[idx + 1]
          });
        }
      }

      if (key === "ArrowUp") {
        if (remaining[0] === focusedOption) {
          this.setState({
            focusedOption: matching.slice(-1)[0]
          });
        } else if (matching[0] === focusedOption) {
          return;
        } else if (remaining.includes(focusedOption)) {
          const idx = remaining.indexOf(focusedOption);
          this.setState({
            focusedOption: remaining[idx - 1]
          });
        } else {
          const idx = matching.indexOf(focusedOption);
          this.setState({
            focusedOption: matching[idx - 1]
          });
        }
      }
    }
  };

  matchOptions = () => {
    const matching = this.props.options.filter(
      option =>
        option.toLowerCase().includes(this.state.term.toLowerCase()) &&
        !this.state.selected.includes(option)
    );

    const remaining = this.props.options.filter(
      option =>
        !option.toLowerCase().includes(this.state.term.toLowerCase()) &&
        !this.state.selected.includes(option)
    );

    this.setState(
      {
        matching,
        remaining,
        focusedOption: matching[0] || remaining[0]
      },
      () => console.log(this.state.matching.length, this.state.remaining.length)
    );
  };

  render() {
    const {
      overrideInputClass,
      inputClass,
      overrideInputContainerClass,
      inputContainerClass,
      options,
      optionsClass,
      overrideOptionsClass,
      overrideOptionClass,
      optionClass
    } = this.props;

    const {
      focused,
      selected,
      term,
      focusedOption,
      matching,
      remaining
    } = this.state;

    return (
      <div className="container">
        <div
          className={`${
            overrideInputContainerClass ? "" : "input-container"
          } ${inputContainerClass || ""}`}
          ref={this.inputContainer}
        >
          {selected.length !== 0 &&
            selected.map(option => (
              <div
                key={`selected-${option}`}
                className={`${overrideInputClass ? "" : "token"} ${inputClass ||
                  ""}`}
              >
                {option}
                <button
                  className="close"
                  onClick={() => this.handleRemoveOption(option)}
                >
                  X
                </button>
              </div>
            ))}
          <input
            ref={this.input}
            className={`${overrideInputClass ? "" : "input"} ${inputClass ||
              ""}`}
            autoComplete={"false"}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            value={term}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        {focused && (
          <div
            ref={this.dropdownOptions}
            className={`${
              overrideOptionsClass ? "" : "options"
            } ${optionsClass || ""}`}
          >
            {matching
              .filter(option => !selected.includes(option))
              .map(option => (
                <button
                  onClick={() => this.handleUpdateSelection(option)}
                  onMouseEnter={() => this.handleMouseEnter(option)}
                  ref={option === focusedOption ? this.focusedOption : null}
                  key={`matching-${option}`}
                  className={`${
                    overrideOptionClass ? "" : "matching-option"
                  } ${optionClass || ""} ${
                    option === focusedOption ? "focused-option" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            {remaining.length !== 0 &&
              matching.length !== 0 && (
                <div style={{ width: "100%", height: 2, background: "blue" }} />
              )}
            {remaining
              .filter(option => !selected.includes(option))
              .map(option => (
                <button
                  onClick={() => this.handleUpdateSelection(option)}
                  key={`remaining-${option}`}
                  onMouseEnter={() => this.handleMouseEnter(option)}
                  ref={option === focusedOption ? this.focusedOption : null}
                  className={`${
                    overrideOptionClass ? "" : "missing-option"
                  } ${optionClass || ""} ${
                    option === focusedOption ? "focused-option" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
          </div>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
