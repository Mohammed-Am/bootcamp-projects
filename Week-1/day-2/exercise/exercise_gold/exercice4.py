import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
  
    throws = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        throws += 1
        if dice1 == dice2:
            break
    return throws

def main():
  
    results = []
    for _ in range(100):
        results.append(throw_until_doubles())
    
    total_throws = sum(results)
    average_throws = round(total_throws / len(results), 2)
    
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws}")

if __name__ == "__main__":
    main()