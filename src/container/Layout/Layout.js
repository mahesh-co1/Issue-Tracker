import React from "react";
import Backlog from "../../component/Backlog/Backlog";
import Subtask from "../../component/Backlog/Subtask/Subtask";
import "./Layout.css";

import { Container, Row, Col, Button, Input } from "reactstrap";

const tasks = {
  1: {
    title: "Integration of different APIs",
    assignee:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    priority: "high",
    isCompleted: false,
    subtasks: ["Hee"],
  },
  2: {
    title: "Working on main project",
    assignee:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    priority: "low",
    isCompleted: true,
    subtasks: [],
  },
  3: {
    title: "Try different solutions in order to solve the problems",
    assignee:
      "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    priority: "high",
    isCompleted: true,
    subtasks: [],
  },
  4: {
    title: "Use Github library to add crippling effect",
    assignee:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
    priority: "medium",
    isCompleted: false,
    subtasks: [],
  },
  5: {
    title: "Add Clicks Listener",
    assignee:
      "data:image/jpeg;base64,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",
    priority: "low",
    isCompleted: false,
    subtasks: [],
  },
  6: {
    title: "Try different solutions in order to solve the problems",
    assignee:
      "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    priority: "high",
    isCompleted: true,
    subtasks: [],
  },
  7: {
    title: "Use Github library to add crippling effect",
    assignee:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
    priority: "medium",
    isCompleted: false,
    subtasks: [],
  },
  8: {
    title: "Add Clicks Listener",
    assignee:
      "data:image/jpeg;base64,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",
    priority: "low",
    isCompleted: false,
    subtasks: [],
  },
  9: {
    title: "Try different solutions in order to solve the problems",
    assignee:
      "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    priority: "high",
    isCompleted: true,
    subtasks: [],
  },
  10: {
    title: "Use Github library to add crippling effect",
    assignee:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
    priority: "medium",
    isCompleted: false,
    subtasks: [],
  },
  15: {
    title: "Add Clicks Listener",
    assignee:
      "data:image/jpeg;base64,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",
    priority: "low",
    isCompleted: false,
    subtasks: [],
  },
  16: {
    title: "Try different solutions in order to solve the problems",
    assignee:
      "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    priority: "high",
    isCompleted: true,
    subtasks: [],
  },
  17: {
    title: "Use Github library to add crippling effect",
    assignee:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
    priority: "medium",
    isCompleted: false,
    subtasks: [],
  },
  117: {
    title: "Use Github library to add crippling effect",
    assignee:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
    priority: "medium",
    isCompleted: false,
    subtasks: [],
  },
  18: {
    title: "Add Clicks Listener",
    assignee:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDw0NDw0PDQ8PDw4PDw8PDw8PFREWGBcXFRUYHiggGBolGxcVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OFxAQGS0dHR0tKy0tKy0tKy0vLS0wLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0rKy0tLS03Lf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHAwUGBAj/xABBEAACAgEBBAcFBgMGBgMAAAABAgADEQQFEiExBgcTQVFhcSIygZGhFCNCUoKxU8HRFWKSosLhc6Oyw/DxM3KD/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQADAQACAwEAAAAAAAAAAQIDETEhElEUMkEE/9oADAMBAAIRAxEAPwDuBHCEBwhCA44oQHCEIBHFHAcYinL9N+lI0CdjVhtVYhbH8KvON71549Ce7EW9Jk7e3pD0s0ezvZusY2kZFNY3nx59y/Eicff1tAN7GgzV3M+o3WI9AhA+c44aZ9VZwrustPEois7sT+Jm/mTxmbaPRTVKA32S/HLJBP0Eyu2s41i7C6yNDq2Wuzf01jcB2pXsifAOOXxxOzHHj3T5u1WyrqBvWae5F8ezYCd31ZdNd112bq7Mqd1NJYw5HJ+7Y9/dj5eEvnXams9LVikojLKFCBigEIQgEUIQCEIQCIxxGAoQhAUUlFAUUcIEcQjhAlCEcAhCOAQhHAIQhAI4RwASt+mmyGu2rzAF1VAB7woOD+xlkic10is7HXaTUdk1x7Kyta0HtFufhjgP3lOTxpx/2dBsHZFGkqC1oAcDebHtMfMz32geE4XVdL7wlb0Gld5Fs3bK7GZVYZXPLiZnu6camipDfoGtLVvYLNM2VFaMgZrFcA1gF18ZhI6Lf9bfbVaMjKyjBHeJSHTLRrp9QtlK7hBBUqOThsg/OdrtPphrLScLpa6snAYWOeWeLAd3pNBajay5Et7GtxfW2+pc1upIOFOBxPh/URiWU3Zc9LppJKIW97cXe9ccZIxqwYAqQVPEEHII8jCdTjRikooChCEBQjhAUIQgEUcIEYRxQFCEIChCEBQihAyQhHAIQjgEIQgEIRwCOEIDE8+sVUFNhAAW/wBo445dCgOfUgT0TDtJS2ntQd67w5ZypDD6iU5M9xpx6/GsZ2JuAlTWUJbmpUqpOcFg3EDOBwHAD1mO/Zg+y6ve3XNmnNQCqQi0gHCgEk8SxJOePDwEx7T2oeyqKo9imxQUQZLHhgen9J4NVRqdXS9iteiWId9QUrZRg4G6W9k+9nPGc3f6dmZ21ew9lmzT7pFdm77JJJR8jh7Q48cd4xmc9t/T16Z0TdU/eb5UDAyAeQ48gB6mbLo1rrtPfZTuvYuc22tgAHdzwbk3DHKGy9CNp7Rd2ciulC+QAc5YYHlwz8pE7t6N2ZdvsGlq9HpkY5YVKT8eI+hnvgBjh3coTsk6jg1e7aUUcUlBQhCAoRxQCKOEBQhCAoo4oBFHFAWIGOIwFFHCBOOEIBHCEAhCOACEcBAI4wIQCOEhdatas7sFRFLMxOAqgZJMDjtt126DU1OrM2kutG6P4Tg53SfDw+XdN1tHWu9atXWtisPaUgZB4T2auirXad6WBwUrbB4MrMgdfQgMJzO0xq9Eg3SttajAY5Vu/mO88pybn29O3j18jmel21W0+KazhmzkKu7xPDGJ13VnpOz0LWNg3W3Euc8QAAFX9/mZwZ2bqL7u2esmxm3a6xx4nw857ttvqNg2aDVIwazLJqasnctRhncJ8F3Tg9xbPfiacU+/GfPfn1bcJpei/SfTbUq36SVsXhZQ+Bah9B7y/wB4fvwm6m7mKKSigRhHEYCijhAUIQgKBhAwCIxxQFFHFAIjHCBGEIQMkcUIDhCEAjhHAYjiEYgOBOASeAHEk8gJrtv7XTQaZ9Q43sEKiA4L2NyXPd458AZUXSPpXqteSrvuUd1NeVT9Xe3xls5tRasna3TnQabIFpvcfhoAYfFjhfrOJ2l0l1O276dDUgqqvuWsVKxJsBPE2NwyAoJwBjh3zjgmZZvUlsUWajUa9hwpAoq/4jjLn1C7o/WZf8Zn6jvt2SVGnaWsTJK3dlcgPIAVrWVH+AH9UzazQi5lXBLA5C92fH/eT11bWWV6zjlLbK1UD3qWIC/Vc/GbM1uAw93exw/EROP8O7XXeTqSvDoNmV1n2QPZHtW45eIX+vfKk65LC+rpXgEFTlE7+LAFj67mP0nzl5JSFQKP/X+8+euszXDUbX1W7jcpK6dMeFYwf8+/8508eZPHNrVv2uRoJrKOrMlit7LqxV1PkRxB9JYXRzrKvoVa9Yh1NY4dquFvX17n+h8zOAZACH7+A+fhM4H1mnXava/9i9IdHr1zp70Zu+s+xavqh4/HlNoRPmo1j+k7Hq86U6ivaFGlu1FlmnvzSFscuEfHsFd7lxG7gfmlLhMq4opIxSiUYpIyMBQhCAoRxQCKOKAoo4oBEY4jAUIQgZYQhAIQhAcYijECQjiElArzrc1RC6Gn8Jey0+qgKP8Aqb5ytRznb9bDk66hfwrplI9S75/YTiqxxm+fFL6nL86tdlijY+mVhxvDah+7PaHK5/QEHwlD1UmxkrX3rHWtfViAP3n0/pqRVXXUvu1oqKPJQAP2ldpybqMLgcjkDw4GG7jAzxPEnymVRIGZrPPq71pqstY+xVW9jE/lVSxPyE+Wb7Wtsex+L2Ozsf7zEk/Uz6G6y9b2Gx9ae+1FoH/6MFP+Xenz0viZpiIrCwzYB3KMn1PL+cyGQoHAsebHe+Hd9JOWVRY8/SeUXGt1ccGRldT3hlOQfmJlDZZx4AfzmC3xkVMfSmyNp1a3TVaqls12rvDxU8ip8CDkH0nqMrXqQ1LnT6+g57Ku+t08mdDvAf4VMsszFZEyMkYjAUUcUBQjigEUcRgKKOKARGOKAoQhAywhCARxRwHGIoxAkI4hHAr7rb0Q3NLqfxB2pbzBUsvyw3zlb1zr+tHaLW7QXTgns9PUBu93aOoYk/DdE49O/wBJvjxS+uh6CaTt9r7PrIyBqBafSoGz91E+iJRvVBVvbXDfw9Lc3oSVX+Zl4ym/Vspjl8JCSI+siTKJVl1367d0+i0oP/yW2XN6VqFGfjYflKc1XuhBzc4/T3/SWL1zakvtKqrPCrS1jHgWdyfpuytWffuY9yDdHqef8prPFb6zMeExu+PlGw9efjMN+AMeXrJQw6Z/atJ/KPrHbwxnvEx6biX8yB8AJ6LN1u8GVniVudS71f2feqkdt9qZrRkZwUQIcflwMeoaWAZ869Etr/2dr9PqFdt3fWu1e5qXYBgfHHMeYE+ijM7FkTImSMRkCMUlFAUUIQCRMlImARQMIBEY4jAUIQgZYCEBAcIRwCMRRiBIRxCMQKL6cV2JtbWb4ILWlhnvrK+yR8MfKahDwPqJ2nW1aG1+nQAZTTAlscTvO3M9+MfUzis4Hxm+fFKsfqTqzrNbZ+Witf8AE5P+mXGJVXUdV7Gvt8bK0+Sk/wCoS1VmevV45/anTHTUav7AqX6jV4z2VK14HAnBd2VQRjlmajV9Z2z9OTXcmqrtVmFlXZqz148SrFTnyJnQP0V2e91l7aKjtrGLO+7hmJ5kkd5mo2n0J2V7T/YaN/mTxP0zKdioOnm2a9ZrtRrayxpdKjUWBVigqXmDyOczkdF7uTzYlj6mbDpsa69ZqKKUSuoW4CIAqgKADwHnNbQ3ATSVD0k8vWebUtxMyF55bjJqIWj9pt3uJyfSe64YGFQFj38MKJrNPYQxxzPAT1K6oOGXsPM9w8hIl+JejZmmTtqTcfu2uqDnwQuAx+WZ9NET5bttdhxQgAc8gYl4dXvTR9rG+qzTCpqK6jvrZvq+9kcRjgeGfn4Suh2URjilUkZGSigRgY4oCMUcUBQhCARRxQFCKEDNCEBAcYijgEYijECUGYAEnkASfQQEjcwCOSMqFYkeIxxEChOk+3X2hrBqGCrndrRQDwrBOMnvPHnwmvuOAZjtbfv31QVo1pZawchFLEhQfADh8Itc2B6mbqLq6kqN3Ztr/wAXVWN8kRf5Sxk5ziuqanc2PpeGN42v87GxO0SZVeNJtR7mtPYtS4HA79jqq+WApBPpNBtIaq1gR9lITIP3licT+k5my1dFXakdnqsZYYVrcMc/3eHKak10q7buj1PvcCBqCD6+1x+M49eu/HUaPb3Q7Taig2W10pczAm6oBXz/APbA3j6gyr9r7Av0TNvKXpHEXKPZ3c/i/KfpL32ooNBymOXA93wnPEgNxOccpOeS4RvizufqqV7QeI+cw3NL21OlqCiz7NSVz7Raus93PlPANHp637arT0JbjIsWtAwOeeQJpf8Apn6Y/wAa/tSdb4zjmeGRzx5T2VK2PxDyBUH+s+nNh3JqNN95TSd7eFg7NAthBIyRjHET5+6bbPTR7U1lFQ3aVt3q17lRgGwPIEkDyAm+LLO3PqWXppML3qw8yf6Sw+pjadw1V+hyDpzQ9+7hfZsDoud7GeIY888hK5az/ed11Lah12ldUPcs0jl+A4FLE3Tnu94j4ydIi6YjHEZRKMUZigKEIoAYozFAUIQgKKOKAoQhAzQhCARwhAcYijECQmp6W6lqdnayxACwpYcQSMHgfoTNsJo+nNwr2VrSe+nc+LsFHw4yZ6KKrA3h8cfKYtoHii+JB/eZqve+Bnk1RzcB4f8An8ptfFJ6+lOgWP7K2fu8jpKj81GZ0lffOa6BLjZehGMY06ftOlSYrsOspFqlCWAyDlcZHzGJzHS6o6XQavVrdcX02nssTfKbhcL7IICjPHE6tu+cV1ouzbG14XggqUE/mJsUYkXMvq03qeVVuh6x2sATV14GffpGR8VY5HwJnubpfoBj79znicVW5H0lZhI2SVvDlec+lrjpto76moSzdzgfefd8uWM84l1QO6FbeLMqqAQd5mOFHxJHzlTFZvNj9JrdIK92mi16mDVtarNukcuAIyR3ce4SmuBfPPZ6+gNg02Vaaqlhi3dBYZBwzPvYyOeN7HwlLdZoUbc1o5qtyBgOHDs0JH1ne9XW2tRteq+y7UPU9FwUppsVK6MuV3jgsDkNxVl5TobuiGzrLGut0ddtrElrLmstZye9i5O8fM8prn58YW93t8+AVnKrU5dvZQZ3sseA4d5zLr6sei77O0z23qF1WpKsy/iqqA9lCfHOSfUDum92T0Z0OiYvp9JVW+c9pgvYPRmJIHkJtpKCiMDEZAIoRQCKOIwEYo4oBFCKAQhFAIRQgZ4QhAcIoxAcYigIExOb6xXxsnU8cZNI/wCck6MTBr9lJrlTT28ajbW7rjIdUYMVPkcYkz0fPFZ9o8eQ4+XGeLTA2X/GWv1xVrT9l02n0q06amtnssrpFdXa2cK03gME7tdpx5ysOj4Y6hdz3i2Bw8TNLe4ievpLovhNLRWPw1IPkom7Tj34nNdH1srqrDnPAeU6GluJmaU7W5zjes/jsXXdwCV4A/4qTq7H4t5EzmesGprdkbSAHspQWP6GDH9pMHzjWuTJunCel7CwUNuncAAwiLwxjmAM/GY3l+lXiKmR3ZlOO8gcZHIlekrK6jb93Ua+n+JRVb5/duy/9yW8ZT/UlpUbV6y8lhZVp0RFBG6VsclifP2Fx6mXBK1JRGMyMgEUIGAoo4oBEY5GAjFGYoBFCEAihEYBCKEDPHCEAhCEBwEIQJia7b2u1OmpFumZFbtFVyyq2EY4yAfPEISuvKtn2OO629uO+z9PprCrWNctwZVK8FRlORxH4+7w5Sn9n7Rs0t1d1RG+jBgGGVPHvEIS2L3idp5ZJuyLb0HW62VS3ZybpQE9neQy+YyuD6ToNF1o6Jvfr1FZx+VWH0MITeZlY2sOt6zdKCexo1FwOcN7Fa5HA+8c8x4TmekHWNq9bVbpa6aKKLa3rdBvW2MrAg5c4Az6QhLTER+VVyYn5QhKJeewZkIQkJWB1MagptG6vus0bk+qWJj92lzwhM9erRExGKEgBiihAIQhAWYjCEBGRhCARZhCAiYswhAWYQhA/9k=",
    priority: "low",
    isCompleted: false,
    subtasks: [],
  },
  19: {
    title: "Try different solutions in order to solve the problems",
    assignee:
      "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    priority: "high",
    isCompleted: true,
    subtasks: [],
  },
  110: {
    title: "Use Github library to add crippling effect",
    assignee:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
    priority: "medium",
    isCompleted: false,
    subtasks: [],
  },
  115: {
    title: "Add Clicks Listener",
    assignee:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDw0NDw0PDQ8PDw4PDw8PDw8PFREWGBcXFRUYHiggGBolGxcVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OFxAQGS0dHR0tKy0tKy0tKy0vLS0wLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0rKy0tLS03Lf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHAwUGBAj/xABBEAACAgEBBAcFBgMGBgMAAAABAgADEQQFEiExBgcTQVFhcSIygZGhFCNCUoKxU8HRFWKSosLhc6Oyw/DxM3KD/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQADAQACAwEAAAAAAAAAAQIDETEhElEUMkEE/9oADAMBAAIRAxEAPwDuBHCEBwhCA44oQHCEIBHFHAcYinL9N+lI0CdjVhtVYhbH8KvON71549Ce7EW9Jk7e3pD0s0ezvZusY2kZFNY3nx59y/Eicff1tAN7GgzV3M+o3WI9AhA+c44aZ9VZwrustPEois7sT+Jm/mTxmbaPRTVKA32S/HLJBP0Eyu2s41i7C6yNDq2Wuzf01jcB2pXsifAOOXxxOzHHj3T5u1WyrqBvWae5F8ezYCd31ZdNd112bq7Mqd1NJYw5HJ+7Y9/dj5eEvnXams9LVikojLKFCBigEIQgEUIQCEIQCIxxGAoQhAUUlFAUUcIEcQjhAlCEcAhCOAQhHAIQhAI4RwASt+mmyGu2rzAF1VAB7woOD+xlkic10is7HXaTUdk1x7Kyta0HtFufhjgP3lOTxpx/2dBsHZFGkqC1oAcDebHtMfMz32geE4XVdL7wlb0Gld5Fs3bK7GZVYZXPLiZnu6camipDfoGtLVvYLNM2VFaMgZrFcA1gF18ZhI6Lf9bfbVaMjKyjBHeJSHTLRrp9QtlK7hBBUqOThsg/OdrtPphrLScLpa6snAYWOeWeLAd3pNBajay5Et7GtxfW2+pc1upIOFOBxPh/URiWU3Zc9LppJKIW97cXe9ccZIxqwYAqQVPEEHII8jCdTjRikooChCEBQjhAUIQgEUcIEYRxQFCEIChCEBQihAyQhHAIQjgEIQgEIRwCOEIDE8+sVUFNhAAW/wBo445dCgOfUgT0TDtJS2ntQd67w5ZypDD6iU5M9xpx6/GsZ2JuAlTWUJbmpUqpOcFg3EDOBwHAD1mO/Zg+y6ve3XNmnNQCqQi0gHCgEk8SxJOePDwEx7T2oeyqKo9imxQUQZLHhgen9J4NVRqdXS9iteiWId9QUrZRg4G6W9k+9nPGc3f6dmZ21ew9lmzT7pFdm77JJJR8jh7Q48cd4xmc9t/T16Z0TdU/eb5UDAyAeQ48gB6mbLo1rrtPfZTuvYuc22tgAHdzwbk3DHKGy9CNp7Rd2ciulC+QAc5YYHlwz8pE7t6N2ZdvsGlq9HpkY5YVKT8eI+hnvgBjh3coTsk6jg1e7aUUcUlBQhCAoRxQCKOEBQhCAoo4oBFHFAWIGOIwFFHCBOOEIBHCEAhCOACEcBAI4wIQCOEhdatas7sFRFLMxOAqgZJMDjtt126DU1OrM2kutG6P4Tg53SfDw+XdN1tHWu9atXWtisPaUgZB4T2auirXad6WBwUrbB4MrMgdfQgMJzO0xq9Eg3SttajAY5Vu/mO88pybn29O3j18jmel21W0+KazhmzkKu7xPDGJ13VnpOz0LWNg3W3Euc8QAAFX9/mZwZ2bqL7u2esmxm3a6xx4nw857ttvqNg2aDVIwazLJqasnctRhncJ8F3Tg9xbPfiacU+/GfPfn1bcJpei/SfTbUq36SVsXhZQ+Bah9B7y/wB4fvwm6m7mKKSigRhHEYCijhAUIQgKBhAwCIxxQFFHFAIjHCBGEIQMkcUIDhCEAjhHAYjiEYgOBOASeAHEk8gJrtv7XTQaZ9Q43sEKiA4L2NyXPd458AZUXSPpXqteSrvuUd1NeVT9Xe3xls5tRasna3TnQabIFpvcfhoAYfFjhfrOJ2l0l1O276dDUgqqvuWsVKxJsBPE2NwyAoJwBjh3zjgmZZvUlsUWajUa9hwpAoq/4jjLn1C7o/WZf8Zn6jvt2SVGnaWsTJK3dlcgPIAVrWVH+AH9UzazQi5lXBLA5C92fH/eT11bWWV6zjlLbK1UD3qWIC/Vc/GbM1uAw93exw/EROP8O7XXeTqSvDoNmV1n2QPZHtW45eIX+vfKk65LC+rpXgEFTlE7+LAFj67mP0nzl5JSFQKP/X+8+euszXDUbX1W7jcpK6dMeFYwf8+/8508eZPHNrVv2uRoJrKOrMlit7LqxV1PkRxB9JYXRzrKvoVa9Yh1NY4dquFvX17n+h8zOAZACH7+A+fhM4H1mnXava/9i9IdHr1zp70Zu+s+xavqh4/HlNoRPmo1j+k7Hq86U6ivaFGlu1FlmnvzSFscuEfHsFd7lxG7gfmlLhMq4opIxSiUYpIyMBQhCAoRxQCKOKAoo4oBEY4jAUIQgZYQhAIQhAcYijECQjiElArzrc1RC6Gn8Jey0+qgKP8Aqb5ytRznb9bDk66hfwrplI9S75/YTiqxxm+fFL6nL86tdlijY+mVhxvDah+7PaHK5/QEHwlD1UmxkrX3rHWtfViAP3n0/pqRVXXUvu1oqKPJQAP2ldpybqMLgcjkDw4GG7jAzxPEnymVRIGZrPPq71pqstY+xVW9jE/lVSxPyE+Wb7Wtsex+L2Ozsf7zEk/Uz6G6y9b2Gx9ae+1FoH/6MFP+Xenz0viZpiIrCwzYB3KMn1PL+cyGQoHAsebHe+Hd9JOWVRY8/SeUXGt1ccGRldT3hlOQfmJlDZZx4AfzmC3xkVMfSmyNp1a3TVaqls12rvDxU8ip8CDkH0nqMrXqQ1LnT6+g57Ku+t08mdDvAf4VMsszFZEyMkYjAUUcUBQjigEUcRgKKOKARGOKAoQhAywhCARxRwHGIoxAkI4hHAr7rb0Q3NLqfxB2pbzBUsvyw3zlb1zr+tHaLW7QXTgns9PUBu93aOoYk/DdE49O/wBJvjxS+uh6CaTt9r7PrIyBqBafSoGz91E+iJRvVBVvbXDfw9Lc3oSVX+Zl4ym/Vspjl8JCSI+siTKJVl1367d0+i0oP/yW2XN6VqFGfjYflKc1XuhBzc4/T3/SWL1zakvtKqrPCrS1jHgWdyfpuytWffuY9yDdHqef8prPFb6zMeExu+PlGw9efjMN+AMeXrJQw6Z/atJ/KPrHbwxnvEx6biX8yB8AJ6LN1u8GVniVudS71f2feqkdt9qZrRkZwUQIcflwMeoaWAZ869Etr/2dr9PqFdt3fWu1e5qXYBgfHHMeYE+ijM7FkTImSMRkCMUlFAUUIQCRMlImARQMIBEY4jAUIQgZYCEBAcIRwCMRRiBIRxCMQKL6cV2JtbWb4ILWlhnvrK+yR8MfKahDwPqJ2nW1aG1+nQAZTTAlscTvO3M9+MfUzis4Hxm+fFKsfqTqzrNbZ+Witf8AE5P+mXGJVXUdV7Gvt8bK0+Sk/wCoS1VmevV45/anTHTUav7AqX6jV4z2VK14HAnBd2VQRjlmajV9Z2z9OTXcmqrtVmFlXZqz148SrFTnyJnQP0V2e91l7aKjtrGLO+7hmJ5kkd5mo2n0J2V7T/YaN/mTxP0zKdioOnm2a9ZrtRrayxpdKjUWBVigqXmDyOczkdF7uTzYlj6mbDpsa69ZqKKUSuoW4CIAqgKADwHnNbQ3ATSVD0k8vWebUtxMyF55bjJqIWj9pt3uJyfSe64YGFQFj38MKJrNPYQxxzPAT1K6oOGXsPM9w8hIl+JejZmmTtqTcfu2uqDnwQuAx+WZ9NET5bttdhxQgAc8gYl4dXvTR9rG+qzTCpqK6jvrZvq+9kcRjgeGfn4Suh2URjilUkZGSigRgY4oCMUcUBQhCARRxQFCKEDNCEBAcYijgEYijECUGYAEnkASfQQEjcwCOSMqFYkeIxxEChOk+3X2hrBqGCrndrRQDwrBOMnvPHnwmvuOAZjtbfv31QVo1pZawchFLEhQfADh8Itc2B6mbqLq6kqN3Ztr/wAXVWN8kRf5Sxk5ziuqanc2PpeGN42v87GxO0SZVeNJtR7mtPYtS4HA79jqq+WApBPpNBtIaq1gR9lITIP3licT+k5my1dFXakdnqsZYYVrcMc/3eHKak10q7buj1PvcCBqCD6+1x+M49eu/HUaPb3Q7Taig2W10pczAm6oBXz/APbA3j6gyr9r7Av0TNvKXpHEXKPZ3c/i/KfpL32ooNBymOXA93wnPEgNxOccpOeS4RvizufqqV7QeI+cw3NL21OlqCiz7NSVz7Raus93PlPANHp637arT0JbjIsWtAwOeeQJpf8Apn6Y/wAa/tSdb4zjmeGRzx5T2VK2PxDyBUH+s+nNh3JqNN95TSd7eFg7NAthBIyRjHET5+6bbPTR7U1lFQ3aVt3q17lRgGwPIEkDyAm+LLO3PqWXppML3qw8yf6Sw+pjadw1V+hyDpzQ9+7hfZsDoud7GeIY888hK5az/ed11Lah12ldUPcs0jl+A4FLE3Tnu94j4ydIi6YjHEZRKMUZigKEIoAYozFAUIQgKKOKAoQhAzQhCARwhAcYijECQmp6W6lqdnayxACwpYcQSMHgfoTNsJo+nNwr2VrSe+nc+LsFHw4yZ6KKrA3h8cfKYtoHii+JB/eZqve+Bnk1RzcB4f8An8ptfFJ6+lOgWP7K2fu8jpKj81GZ0lffOa6BLjZehGMY06ftOlSYrsOspFqlCWAyDlcZHzGJzHS6o6XQavVrdcX02nssTfKbhcL7IICjPHE6tu+cV1ouzbG14XggqUE/mJsUYkXMvq03qeVVuh6x2sATV14GffpGR8VY5HwJnubpfoBj79znicVW5H0lZhI2SVvDlec+lrjpto76moSzdzgfefd8uWM84l1QO6FbeLMqqAQd5mOFHxJHzlTFZvNj9JrdIK92mi16mDVtarNukcuAIyR3ce4SmuBfPPZ6+gNg02Vaaqlhi3dBYZBwzPvYyOeN7HwlLdZoUbc1o5qtyBgOHDs0JH1ne9XW2tRteq+y7UPU9FwUppsVK6MuV3jgsDkNxVl5TobuiGzrLGut0ddtrElrLmstZye9i5O8fM8prn58YW93t8+AVnKrU5dvZQZ3sseA4d5zLr6sei77O0z23qF1WpKsy/iqqA9lCfHOSfUDum92T0Z0OiYvp9JVW+c9pgvYPRmJIHkJtpKCiMDEZAIoRQCKOIwEYo4oBFCKAQhFAIRQgZ4QhAcIoxAcYigIExOb6xXxsnU8cZNI/wCck6MTBr9lJrlTT28ajbW7rjIdUYMVPkcYkz0fPFZ9o8eQ4+XGeLTA2X/GWv1xVrT9l02n0q06amtnssrpFdXa2cK03gME7tdpx5ysOj4Y6hdz3i2Bw8TNLe4ievpLovhNLRWPw1IPkom7Tj34nNdH1srqrDnPAeU6GluJmaU7W5zjes/jsXXdwCV4A/4qTq7H4t5EzmesGprdkbSAHspQWP6GDH9pMHzjWuTJunCel7CwUNuncAAwiLwxjmAM/GY3l+lXiKmR3ZlOO8gcZHIlekrK6jb93Ua+n+JRVb5/duy/9yW8ZT/UlpUbV6y8lhZVp0RFBG6VsclifP2Fx6mXBK1JRGMyMgEUIGAoo4oBEY5GAjFGYoBFCEAihEYBCKEDPHCEAhCEBwEIQJia7b2u1OmpFumZFbtFVyyq2EY4yAfPEISuvKtn2OO629uO+z9PprCrWNctwZVK8FRlORxH4+7w5Sn9n7Rs0t1d1RG+jBgGGVPHvEIS2L3idp5ZJuyLb0HW62VS3ZybpQE9neQy+YyuD6ToNF1o6Jvfr1FZx+VWH0MITeZlY2sOt6zdKCexo1FwOcN7Fa5HA+8c8x4TmekHWNq9bVbpa6aKKLa3rdBvW2MrAg5c4Az6QhLTER+VVyYn5QhKJeewZkIQkJWB1MagptG6vus0bk+qWJj92lzwhM9erRExGKEgBiihAIQhAWYjCEBGRhCARZhCAiYswhAWYQhA/9k=",
    priority: "low",
    isCompleted: false,
    subtasks: [],
  },
  116: {
    title: "Try different solutions in order to solve the problems",
    assignee:
      "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    priority: "high",
    isCompleted: true,
    subtasks: [],
  },
  1117: {
    title: "Use Github library to add crippling effect",
    assignee:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
    priority: "medium",
    isCompleted: false,
    subtasks: [],
  },
};

const dropdownItem = ["Mahesh", "Ranjit", "Sradheya"];
const priorityItem = ["Low", "Medium", "High"];

class Layout extends React.Component {
  state = {
    isSubtaskOpen: false,
    currentTask: null,
    tasks: tasks,

    currentAssigned: null,
    currentPriority: null,
  };

  openSubtaskBar = () => {
    this.setState((prevState) => {
      return {
        isSubtaskOpen: true,
        currentTask: null,
      };
    });
  };

  getCurrentSubtask = (task) => {
    this.setState({
      currentTask: task,
    });
  };

  addSubtaskToTask = (subtask, task) => {
    console.log(task, subtask);
    const newTasks = { ...this.state.tasks };
    newTasks[task].subtasks.push(subtask);
    this.setState({
      tasks: newTasks,
    });
  };

  getDropdowns = (dropdownItems) => {
    return (
      <Input type="select" size="sm" style={{ marginRight: 10 }}>
        {dropdownItems}
      </Input>
    );
  };

  render() {
    const assignedDropdownOptions = dropdownItem.map((item) => {
      return (
        <option onClick={(e) => this.getSelectedAssigned(e, "assigned")}>
          {item}
        </option>
      );
    });

    const priorityDropdownOptions = priorityItem.map((item) => {
      return (
        <option onClick={(e) => this.getSelectedAssigned(e, "priority")}>
          {item}
        </option>
      );
    });

    return (
      <div>
        <Container className="">
          <Row className="Container-Row">
            <Col xl="2"></Col>
            <Col xl="10">
              <div className="Filters">
                <div className="Leftside">
                  <p style={{ marginRight: 10 }}> Filters:</p>
                  {this.getDropdowns(assignedDropdownOptions)}
                  <Input type="date" size="sm" style={{ marginRight: 10 }} />
                  {this.getDropdowns(priorityDropdownOptions)}
                </div>
                <Button color="primary" size="sm">
                  Add Task
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="Container-Row">
            <Col xl="2"></Col>
            <Col xl={this.state.isSubtaskOpen ? "6" : "10"}>
              <Backlog
                tasks={this.state.tasks}
                openSubtaskBar={this.openSubtaskBar}
                currentTask={this.state.currentTask}
                getCurrentSubtask={(task) => this.getCurrentSubtask(task)}
              />
            </Col>
            <Col xl={this.state.isSubtaskOpen ? "4" : "0"}>
              {this.state.isSubtaskOpen ? (
                <Subtask
                  taskKey={this.state.currentTask}
                  task={this.state.tasks[this.state.currentTask]}
                  addSubtaskToTask={this.addSubtaskToTask}
                />
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Layout;
