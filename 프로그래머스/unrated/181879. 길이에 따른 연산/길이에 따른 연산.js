function solution(num_list) {
    let sum = 0;
    let multi = 1;

    if (num_list.length <= 10) {
        for (let i = 0; i < num_list.length; i++) {
            multi *= num_list[i];
        }
        return multi;
    } else {
        for (let i = 0; i < num_list.length; i++) {
            sum += num_list[i];
        }
        return sum;
    }
}
