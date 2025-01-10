package com.example.portfolio.service;

import com.example.portfolio.model.Stock;
import com.example.portfolio.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Optional<Stock> getStockById(Long id) {
        return stockRepository.findById(id);
    }

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock updateStock(Long id, Stock stockDetails) {
        Stock stock = stockRepository.findById(id).orElseThrow(() -> new RuntimeException("Stock not found"));
        stock.setName(stockDetails.getName());
        stock.setTicker(stockDetails.getTicker());
        stock.setQuantity(stockDetails.getQuantity());
        stock.setBuyPrice(stockDetails.getBuyPrice());
        return stockRepository.save(stock);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }

    public double calculateTotalPortfolioValue() {
        // Logic to calculate total portfolio value using real-time stock prices
        return 0.0; // Placeholder for actual implementation
    }
}