
import java.io.*;
import java.net.*;

public class QuizServer
{
    public static void main(String[] args) throws Exception
    {
        ServerSocket server = new ServerSocket(8080);

        System.out.println("Server started...");

        while(true)
        {
            Socket socket = server.accept();

            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream())
            );

            String request = in.readLine();

            if(request != null && request.contains("/save"))
            {
                String data = request.split("data=")[1].split(" ")[0];

                data = java.net.URLDecoder.decode(data, "UTF-8");

                FileWriter fw = new FileWriter("results.txt", true);
                fw.write(data + "\n");
                fw.close();

                System.out.println("Saved: " + data);
            }

            PrintWriter out = new PrintWriter(socket.getOutputStream());
            out.println("HTTP/1.1 200 OK");
            out.println();
            out.println("Saved");

            out.flush();
            socket.close();
        }
    }
}