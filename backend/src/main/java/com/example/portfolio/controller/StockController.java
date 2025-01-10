import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockService stockService;

    @GetMapping
    public ResponseEntity<List<Stock>> getAllStocks() {
        List<Stock> stocks = stockService.getAllStocks();
        return new ResponseEntity<>(stocks, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Stock> addStock(@RequestBody Stock stock) {
        Stock createdStock = stockService.addStock(stock);
        return new ResponseEntity<>(createdStock, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Stock> updateStock(@PathVariable Long id, @RequestBody Stock stock) {
        Stock updatedStock = stockService.updateStock(id, stock);
        return new ResponseEntity<>(updatedStock, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/portfolio-value")
    public ResponseEntity<Double> getPortfolioValue() {
        double totalValue = stockService.calculatePortfolioValue();
        return new ResponseEntity<>(totalValue, HttpStatus.OK);
    }
}