def solution(n, m):
    def gcd(a, b):  # 최대공약수(GCD)
        while b:
            a, b = b, a % b
        return a

    def lcm(a, b):  # 최소공배수(LCM)
        return (a * b) // gcd(a, b)

    return [gcd(n, m), lcm(n, m)]
