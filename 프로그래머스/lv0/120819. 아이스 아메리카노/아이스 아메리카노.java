class Solution {
    public int[] solution(int money) {
      
        int[] result = new int[2];
        
        int coffee = money / 5500;
        int change = money % 5500;
        
        result[0] = coffee;
        result[1] = change;
        
        return result;
    }
}