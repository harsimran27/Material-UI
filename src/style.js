import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
    container: {
        backgroundColor: "#ffff",
        padding: "10px",
    },

    cardGrid: {
        padding: "30px 0"
    },

    card: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },

    cardMedia: {
        paddingTop: "56.25%",
    },

    cardContent: {
        flexGrow: "1",
    }
}))

export default useStyle;