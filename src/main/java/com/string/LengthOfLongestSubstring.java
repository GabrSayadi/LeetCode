package com.string;

import java.util.*;

public class LengthOfLongestSubstring {

  public int lengthOfLongestSubstring(String s) {
    int[] str = new int[150];
    Arrays.fill(str, -1);
    int len = 0, left = 0;
    for (int right = 0; right < s.length(); right++) {
      left = Math.max(left, str[s.charAt(right)] + 1);
      str[s.charAt(right)] = right;
      len = Math.max(len, right - left + 1);
    }
    return len;
  }
}
