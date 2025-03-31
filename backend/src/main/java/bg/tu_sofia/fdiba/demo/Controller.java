package bg.tu_sofia.fdiba.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
public class Controller {
  @GetMapping()
  public ResponseEntity<Map<String, String>> getHello() {
    Map<String, String> response = new HashMap<>();
    response.put("message", "Hello");
    return ResponseEntity.ok(response);
  }
}
