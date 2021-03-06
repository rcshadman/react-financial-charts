import * as React from "react";
import { CandlestickSeries } from "react-financial-charts/lib/series";
import { Daily, Intraday } from "./basicHeikinAshiSeries";

export default {
    component: CandlestickSeries,
    title: "Visualization|Series/Heikin Ashi",
};

export const daily = () => <Daily />;

export const intraday = () => <Intraday />;
