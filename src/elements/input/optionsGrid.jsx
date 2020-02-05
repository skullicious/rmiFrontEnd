import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 300
  },
  gridListItem: {
    height: 120
  }
}));

export default function OptionsGrid(data) {
  const classes = useStyles();

  const newData = data.data;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={4} rows>
        {newData.map(title => (
          <GridListTile
            className={classes.gridListItem}
            key={title._id}
            cols={title.cols || 1}
          >
            <a> {title.title}</a>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
