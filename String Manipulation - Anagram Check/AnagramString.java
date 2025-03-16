public class AnagramString {
    public static int[] getCount(String str){
        int n = str.length();
        int[] freq = new int[26];
        for(int i=0;i<n;i++){
            char ch = str.charAt(i);
            if(ch>=65 && ch<=92){
                freq[ch-65]++;
            }
            if(ch>=97 && ch<=122){
                freq[ch-97]++;
            }
        }
        return freq;
    }
    public static boolean isAnagram(String s1,String s2){
        int[] a = getCount(s1);
        int[] b = getCount(s2);
        for(int i=0;i<a.length;i++){
            if(a[i] != b[i]){
                return false;
            }    
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println(isAnagram("listen", "silent"));  // true
        System.out.println(isAnagram("acts", "cats"));  // true
        System.out.println(isAnagram("weird", "wired"));  // true
        System.out.println(isAnagram("smile", "limes"));  // true
        System.out.println(isAnagram("tea", "eat"));  // true
        System.out.println(isAnagram("hello", "world"));  // false
    }
}
