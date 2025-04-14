# dice_logic.py
import random

def roll_dice():
    dice = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685']
    return f"{random.choice(dice)}{random.choice(dice)}"
