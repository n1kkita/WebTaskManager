package server.task_manager.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@SpringBootApplication
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
    @GetMapping("/home")
    public String home(){
        return "home";
    }
    @GetMapping("/calendar")
    public String calendar(@RequestParam String name,@RequestParam Long id, Model model){
        model.addAttribute("name",name);
        model.addAttribute("id", id);
        return "calendar";
    }
    @GetMapping("/Sign-in")
    public String signUp(){
        return "Sign-in";
    }
    @GetMapping("/Sign-up")
    public String signIn(){
        return "Sign-up";
    }
    @GetMapping("/groups")
    public String groups(){
        return "groups";
    }
    @GetMapping("/doc")
    public String doc(){
        return "doc";
    }


}
