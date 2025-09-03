class Solution {
    public double solution(int[] arr) {
        int sum = 0;
        int arr_len = arr.length;
        for(int i = 0; i < arr_len; i++)  {
            sum += arr[i];
        }        
        return (double)sum / arr_len;
    }
}


