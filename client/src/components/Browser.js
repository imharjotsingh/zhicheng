/* mcg Standard Browser page.
 * Browse, filter, and add standards to
 * a new course.
 * Date: July 9, 2020
 * Author: Jack Burns
 */

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputField from "../pages/InputField";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import Tooltip from "@material-ui/core/Tooltip";
import Checkbox from "@material-ui/core/Checkbox";
import Standard from "./CreateStandard";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Navbar from "./nav/nav";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";

import { ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  back: {
    backgroundColor: "#fafbff",
  },
  textField: {
    height: "40px",
  },
  font: {
    fontSize: "14px",
  },
  search: {
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginLeft: 20,
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
      marginLeft: 50,
    },
  },
  IconColor: {
    color: "#4b4c4c",
  },
  Text: {
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "0.03em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
  itemSelect: {
    [theme.breakpoints.down("sm")]: {
      height: 400,
      width: 200,
      marginLeft: "20%",
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      height: 150,
      width: "90%",
      marginLeft: "5%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
      height: 60,
      marginLeft: "5%",
    },
  },
  formControl: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 10,
      marginTop: 10,
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: 35,
      marginTop: -21,
    },
    width: 120,
  },
  removeButton: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "3.5%",
      width: 70,
      height: 70,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "4%",
      width: 45,
      height: 45,
    },
    marginTop: -8,
    color: "#2D3142",
  },
  root: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 21,
      marginRight: 21,
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: 62,
      marginRight: 62,
    },
    marginTop: -8,
    marginRight: 65,
  },
  next: {
    [theme.breakpoints.down("lg")]: {
      paddingRight: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "15%",
      marginTop: 20,
      justifyContent: "right",
    },
  },
  selected: {
    marginTop: 20,
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#E5EAF5",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 20,
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: 62,
    },
  },
  button: {
    backgroundColor: "#F7991B",
    color: "white",
    fontSize: "14px",
    textTransform: "none",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "18px",
    letterSpacing: "0.03em",
    [theme.breakpoints.down("sm")]: {
      width: 60,
      marginRight: 20,
    },
    [theme.breakpoints.up("sm")]: {
      width: 165,
      marginRight: 30,
    },
  },
  buttonBack: {
    marginTop: 20,
    backgroundColor: "#F7991B",
    [theme.breakpoints.down("sm")]: {
      width: 65,
      marginRight: 20,
    },
    [theme.breakpoints.up("sm")]: {
      width: 170,
      marginRight: 63,
    },
  },
  pageButton: {
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: 50,
    },
    [theme.breakpoints.up("sm")]: {
      width: 50,
      height: 25,
    },
    backgroundColor: "#fafbff",
  },
  formMargin: {
    marginTop: -15,
    marginLeft: 5,
  },
  dropdown: {
    fontStyle: "normal",
    fontWeight: "heavy",
    color: "black",
  },
  listItem: {
    [theme.breakpoints.down("lg")]: {
      height: 300,
    },
    [theme.breakpoints.up("lg")]: {
      height: 175,
    },
    [theme.breakpoints.down("md")]: {
      height: 375,
    },
  },
}));

function Browser() {
  const classes = useStyles();

  // Number of standards per page
  const [numRows, setNumRows] = useState(5);
  // Index of standards on current page
  const [index, setIndex] = useState([0, 1, 2, 3, 4]);
  // Current total standards
  const [total, setTotal] = useState(0);
  // Constant list of all standards
  const [allStandards, setAllStandards] = useState([]);
  // Current (filtered) list of standards
  const [standards, setStandards] = useState([]);
  // Indexes of checked off standards
  const [checked, setChecked] = useState([]);
  // Number of checked off standards
  const [numChecked, setNumChecked] = useState(0);
  // Number of standards indicator
  const [selected, setSelected] = useState("No standards selected");
  // Index of page's first standard
  const [page, setPage] = useState(0);

  /* State of dropdown menus */
  const [ageGroup, setAgeGroup] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [concept, setConcept] = useState("");
  const [competency, setCompetency] = useState("");
  const [source, setSource] = useState("");
  /********************************************/
  const [search, setSearch] = useState(""); // Current search bar input

  useEffect(() => {
    // Send GET request for all standards in DB
    const callAPI = async () => {
      const res = await fetch("/api/browser", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      var stand = [];
      stand = await res.text();
      stand = JSON.parse(stand);

      const numStandards = stand.length;
      setTotal(numStandards);
      setStandards(stand);

      setAllStandards(stand);
      return stand;
    };

    callAPI();
  }, []);

  /* Narrow down standards based on current search field input */
  const handleSearch = (event) => {
    setSearch(event.target.value);
    var val = new RegExp(event.target.value, "i");
    var newStandards = [];
    var i, curr;
    var list = [];

    /* Narrow down current list if input grows */
    if (val > search) list = standards;
    /* Narrow down entire list if input shrinks */ else list = allStandards;

    for (i = 0; i < list.length; i++) {
      curr = list[i];
      if (curr["Grade"].match(val)) newStandards.push(curr);
      else if (curr["Content Area"].match(val)) newStandards.push(curr);
      else if (curr["Subject Area"].match(val)) newStandards.push(curr);
      else if (curr["Concepts"].match(val)) newStandards.push(curr);
      else if (curr["Competencies"].match(val)) newStandards.push(curr);
      else if (curr["Source"].match(val)) newStandards.push(curr);
    }
    /* create new standards */
    setTotal(newStandards.length);
    setStandards(newStandards);
  };
  /* Narrow down standards from dropdowns based on what caegory the field is,
   * and the field literal with special checks for the 'grade' field
   */
  function filterGrade(value) {
    var newStandards = [];
    var i = 0;
    var item;
    var first = "11";
    var second = "12";
    var filter = value.replace("grade ", "");

    for (i; i < total; i++) {
      item = standards[i]["Grade"].replace(".0", "");

      if (first === item || second === item || item === filter)
        newStandards.push(standards[i]);
    }

    setTotal(newStandards.length);
    setStandards(newStandards);
    setPage(0);
  }
  /* Narrow down standards from dropdowns based on what caegory the field is,
   * and the field literal
   */
  function filterStandards(value, string) {
    var newStandards = [];
    var i = 0;
    var item;
    var filter = value;
    /* must remove letters from standard fields in 'grade' as they do not match db */
    for (i; i < total; i++) {
      item = standards[i][string];

      if (item === filter) newStandards.push(standards[i]);
    }
    setTotal(newStandards.length);
    setStandards(newStandards);
    setPage(0);
  }

  /* methods to handle every dropdown */
  const handleAge = (event) => {
    setAgeGroup(event.target.value);
    filterGrade(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
    filterStandards(event.target.value, "Content Area");
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);
    filterStandards(event.target.value, "Subject Area");
  };

  const handleConcept = (event) => {
    setConcept(event.target.value);
    filterStandards(event.target.value, "Concepts");
  };

  const handleCompetency = (event) => {
    setCompetency(event.target.value);
    filterStandards(event.target.value, "Competencies");
  };

  const handleSource = (event) => {
    var value = event.target.value;
    setSource(event.target.value);
    filterStandards(value, "Source");
  };

  const removeFilters = () => {
    setStandards(allStandards);
    setTotal(allStandards.length);
    setAgeGroup("");
    setContent("");
    setSubject("");
    setConcept("");
    setCompetency("");
    setSource("");
    setSearch("");
  };

  /* Makes dropdown list based on current standards and on which dropdown is changed */
  const makeDropdown = (category, isContent) => {
    /* prevents rendering before standards are retrieved */
    if (standards[0] !== undefined && allStandards[0] !== undefined) {
      /*	Standards after 'Content' can't be set until content is set  */
      if (!isContent && content === "") return;

      var i = 0;
      var menu = [];
      var used = [];

      var item, size;
      var currStandards = standards;
      if (isContent) currStandards = allStandards;

      size = currStandards.length;
      for (i; i < size; i++) {
        item = currStandards[i][category];

        if (!used.includes(item)) {
          used.push(item);
          menu.push(
            <MenuItem className={classes.font} value={item}>
              {item}
            </MenuItem>
          );
        }
      }
      return menu;
    }
  };

  /* Change the number of standards displayed on page and update the
   * indeces on the page
   */
  const handleRow = (event) => {
    var newRow = event.target.value;
    if (page + newRow > total) setNumRows(total - page);
    else setNumRows(newRow);

    const newRowNums = [...index];
    var i;
    /* Growing the page */
    if (newRow > numRows)
      for (i = page + numRows; i < newRow + page; i++) newRowNums.push(i);
    /* Shrinking the page */ else
      for (i = page; i > numRows - newRow; i--) newRowNums.pop(i);

    setIndex(newRowNums);
  };

  /* Render standards from the next page and update indices */
  const handleNext = () => {
    var newPage = page + numRows;
    var newIndex = [];

    /* Check if user is already on final page */
    if (newPage >= total) return;

    /* Check if next page will be final page */
    if (newPage + numRows > total) setNumRows(total - newPage);

    setPage(newPage);

    var start = newPage;
    var i;
    /* Update new page's indices */
    for (i = start; i < start + numRows; i++) newIndex.push(i);

    setIndex(newIndex);
  };
  /* Render standards from the previous page and update indices */
  const handlePrevious = () => {
    const newPage = page - numRows;
    var newIndex = [];

    /* Check if user is already on first page */
    if (newPage <= 0) setPage(0);
    else setPage(newPage);

    var start = page - numRows;
    var i;
    /* Update new page's indices */
    for (i = start; i < start + numRows; i++) newIndex.push(i);

    setIndex(newIndex);
  };

  /* Set given standard to 'checked' on click */
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    var newNumChecked = numChecked;

    /* Check if index of standard is already checked */
    if (currentIndex === -1) {
      newChecked.push(value);
      setNumChecked(numChecked + 1);
      newNumChecked++;
    } else {
      newChecked.splice(currentIndex, 1);
      setNumChecked(numChecked - 1);
      newNumChecked--;
    }

    /* Update array of checked indices */
    setChecked(newChecked);
    showSelected(newNumChecked - numChecked);
  };

  /* Update text on the screen that indicates the number of selected standards
   * Based on whether a box was checked (1) or unchecked (-1)
   */
  const showSelected = (diff) => {
    /* Adding a standard */
    if (diff === 1)
      if (numChecked === 0) {
        setSelected("1 standard selected");
      } else {
        setSelected(numChecked + 1 + " standards selected");
      }
    /* Removing a standard */ else if (numChecked === 1)
      setSelected("No standards selected");
    else setSelected(numChecked - 1 + " standards selected");
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.back}>
          <Box
            m={6}
            display="flex"
            justifyContent="flex-start"
            className={classes.search}
          >
            {/* Search bar */}
            <InputField
              p={5}
              className={classes.textField}
              icon={<SearchIcon className={classes.IconColor} />}
              placeholder="Search standards by content area, subject area, concepts, or competencies"
              name="search"
              fullWidth
              size="small"
              onChange={handleSearch}
              backgroundColor="#fafbff"
            />
          </Box>

          <Grid
            className={classes.itemSelect}
            container
            spacing={3}
            style={{ flexDirection: "row", maxHeight: 700 }}
          >
            <div className={classes.Text}>
              <b>Filter by</b>
            </div>

            {/* Grade dropdown */}
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.dropdown}>Age Group</InputLabel>
              <Select
                value={ageGroup}
                onChange={handleAge}
                className={classes.font}
              >
                <MenuItem className={classes.font} value={"grade 8"}>
                  Grade 8
                </MenuItem>
                <MenuItem className={classes.font} value={"grade 11-12"}>
                  Grade 11 - 12
                </MenuItem>
              </Select>
            </FormControl>

            {/* Content Area dropdown */}
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.dropdown}>Content Area</InputLabel>
              <Select
                value={content}
                onChange={handleContent}
                className={classes.font}
              >
                {makeDropdown("Content Area", true)}
              </Select>
            </FormControl>

            {/* Subject dropdown */}
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.dropdown}>Subject Area</InputLabel>
              <Select
                value={subject}
                onChange={handleSubject}
                className={classes.font}
              >
                {makeDropdown("Subject Area", false)}
              </Select>
            </FormControl>

            {/* Concepts dropdown */}
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.dropdown}>Concept</InputLabel>
              <Select
                value={concept}
                onChange={handleConcept}
                className={classes.font}
              >
                {makeDropdown("Concepts", false)}
              </Select>
            </FormControl>

            {/* Competencies dropdown */}
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.dropdown}>Competency</InputLabel>
              <Select
                value={competency}
                onChange={handleCompetency}
                className={classes.font}
              >
                {makeDropdown("Competencies", false)}
              </Select>
            </FormControl>

            {/* Source dropdown */}
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.dropdown}>Source</InputLabel>
              <Select
                value={source}
                onChange={handleSource}
                className={classes.font}
              >
                {makeDropdown("Source", true)}
              </Select>
            </FormControl>

            <Tooltip title="Remove Filters">
              <IconButton
                aria-label="delete"
                className={classes.removeButton}
                onClick={() => {
                  removeFilters();
                }}
              >
                <CancelIcon color={"red"} style={{ fontSize: 35 }} />
              </IconButton>
            </Tooltip>
          </Grid>

          {/* Add Course Button */}
          <Box display="flex" justifyContent="flex-start">
            <Box
              className={classes.selected}
              display="flex"
              justifyContent="flex-start"
            >
              <Box pl={2}>
                <b>{selected}</b>
              </Box>
            </Box>
            <Box className={classes.buttonBack}>
              <Button className={classes.button}>Add to Course</Button>
            </Box>
          </Box>

          {/* Table of Standards */}
          <List className={classes.root}>
            {index.map((value) => {
              /* Create list item based on current standard and map it
               * to an index */
              const labelId = `checkbox-list-label-${value}`;
              var standIndex = page + (value % numRows);
              var curr = standards[standIndex];

              if (curr !== undefined)
                // Check if standards have been loaded
                return (
                  <ListItem
                    className={classes.listItem}
                    key={value}
                    role={undefined}
                    dense
                    button
                    onClick={handleToggle(value)}
                    divider
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                        style={{
                          color: "#0069aa",
                        }}
                      />
                    </ListItemIcon>

                    <Standard
                      className={classes.listItem}
                      grade={curr.Grade}
                      content={curr["Content Area"]}
                      subject={curr["Subject Area"]}
                      concept={curr.Concepts}
                      competency={curr.Competencies}
                      source={curr.Source}
                    ></Standard>
                  </ListItem>
                );

              return "";
            })}
          </List>

          <Grid
            className={classes.next}
            container
            spacing={0}
            style={{
              flexDirection: "row-reverse",
              maxHeight: 700,
              maxWidth: 1000,
            }}
          >
            {/*********** In reverse order as they appear *************/}

            {/* Next page button */}
            <Button className={classes.pageButton} onClick={() => handleNext()}>
              <NavigateNextIcon />
            </Button>

            {/* Previous page button */}
            <Button
              className={classes.pageButton}
              onClick={() => handlePrevious()}
            >
              <NavigateBeforeIcon />
            </Button>

            <Box px={3} className={classes.Text}>
              {page + 1} - {numRows + page} of {total}
            </Box>

            {/* Page number dropdown */}
            <FormControl className={classes.formMargin}>
              <InputLabel className={classes.dropdown}></InputLabel>
              <Select
                style={{ width: 45 }}
                value={numRows}
                onChange={handleRow}
                className={classes.font}
              >
                <MenuItem className={classes.font} value={5}>
                  5
                </MenuItem>
                <MenuItem className={classes.font} value={10}>
                  10
                </MenuItem>
                <MenuItem className={classes.font} value={25}>
                  25
                </MenuItem>
              </Select>
            </FormControl>
            <div className={classes.Text}>Rows per page:</div>
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Browser;
