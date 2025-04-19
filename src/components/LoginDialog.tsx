
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const LoginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="border-bank-gold text-bank-gold hover:bg-bank-gold hover:text-white"
        >
          <LogIn className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Login</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login to Your Account</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-center text-muted-foreground">
            Login functionality will be implemented with Supabase integration
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
