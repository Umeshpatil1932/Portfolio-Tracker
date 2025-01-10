public class Stock {
    private Long id;
    private String name;
    private String ticker;
    private int quantity;
    private double buyPrice;

    public Stock() {
    }

    public Stock(Long id, String name, String ticker, int quantity, double buyPrice) {
        this.id = id;
        this.name = name;
        this.ticker = ticker;
        this.quantity = quantity;
        this.buyPrice = buyPrice;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getBuyPrice() {
        return buyPrice;
    }

    public void setBuyPrice(double buyPrice) {
        this.buyPrice = buyPrice;
    }
}