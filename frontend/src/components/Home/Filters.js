import {Button, makeStyles, Table, TableCell, TableHead, TableRow} from "@material-ui/core";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
btn:{
    margin: 20,
    width: "86%",
    background: '#00BFFF',
    color:"#ffffff"
},
table:{
    border: '1px solid rgba(224,224,224,1)'
}
});
const Filters = ()=>{
    const classes = useStyles();
    return(
        <>
        <Link to='/CreatePost' style={{textDecoration:'none',color:'inherit'}}>
        <Button variant = "contained" className = {classes.btn}>Create Post</Button>
        </Link>
        <Table className={classes.table}> 
            <TableHead>
                <TableRow>
                    <TableCell>Filter</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Newest to Oldest</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Oldest to Newest</TableCell>
                </TableRow>
            </TableHead>
        </Table>
        </>
    )
};

export default Filters;