import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Dashboard = () => {
    const [portfolioValue, setPortfolioValue] = useState(0);
    const [topStock, setTopStock] = useState(null);
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetchPortfolioValue();
        fetchStocks();
    }, []);

    const fetchPortfolioValue = async () => {
        try {
            const response = await axios.get('/api/portfolio-value');
            setPortfolioValue(response.data);
        } catch (error) {
            console.error('Error fetching portfolio value:', error);
        }
    };

    const fetchStocks = async () => {
        try {
            const response = await axios.get('/api/stocks');
            setStocks(response.data);
            calculateTopStock(response.data);
        } catch (error) {
            console.error('Error fetching stocks:', error);
        }
    };

    const calculateTopStock = (stocks) => {
        if (stocks.length > 0) {
            const top = stocks.reduce((prev, current) => {
                return (prev.buyPrice * prev.quantity > current.buyPrice * current.quantity) ? prev : current;
            });
            setTopStock(top);
        }
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Portfolio Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Total Portfolio Value</Typography>
                            <Typography variant="h6">${portfolioValue.toFixed(2)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Top Performing Stock</Typography>
                            {topStock ? (
                                <Typography variant="h6">{topStock.name} ({topStock.ticker})</Typography>
                            ) : (
                                <Typography variant="h6">N/A</Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;