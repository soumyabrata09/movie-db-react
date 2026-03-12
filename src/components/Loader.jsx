import { CircularProgress, Stack } from "@mui/material";

export const Loader = () => {
    return (
        <div className="loading">
            <Stack spacing={2} direction="row">
                <CircularProgress color="secondary" enableTrackSlot={50}></CircularProgress>
            </Stack>
        </div>
    );
};