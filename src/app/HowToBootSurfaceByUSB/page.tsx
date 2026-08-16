import {ArticalPage , SubTitle , References_link , Img_50, References_book , SourceCode} from '../Parts';

export default function Page() {
  const command_ex = `clean
create partition primary
format fs=fat32 quick
assign`
  return(
    <ArticalPage title="【OS自作】SurfaceでUEFIアプリをUSB起動する方法/How to boot by USB in UEFI device">
      <SubTitle subTitle="記事概要/Abstract" />
      <p>
        Microsoft SurfaceでUSBドライブからUEFIアプリケーションを起動する方法をまとめました。
      </p>
      <p>
        I make article that how to boot UEFI application by USB drive in Microsoft Surface. 
      </p>
      <p>
        UEFI（BIOSと呼ばれることがある）の設定変更は重要な操作で、本記事の手順を実施するとWindows OSが使えなくなる可能性があります。
        普段使わないPCで実施することを推奨します。
      </p>
      <p>
        Setting of UEFI is important operation, execute this article's process and device is able to become to can not boot Windows OS.
        So I recommend you execute not main PC.
      </p>

      <SubTitle subTitle="UEFI設定画面に入る/Transition UEFI setting page" />
      <p>まずは以下の手順でUEFI設定画面に入ります。</p>
      <ol>
        <li>電源が切れたことを確認</li>
        <li>音量を上げるボタンを長押し</li>
        <li>音量を上げるボタンを押したまま、電源ボタンを押して放す</li>
      </ol>
      <p>First, transition UEFI setting page</p>
      <ol>
        <li>confirm to turn off device</li>
        <li>push volume up button long time</li>
        <li>keep push volume up button, push power button</li>
      </ol>
      <Img_50 path="/assets/UEFI設定画面.png" alt="UEFI設定画面" />

      <SubTitle subTitle="UEFIの設定/UEFI setting" />
      <h3>■セキュアブート/Secure boot</h3>
      <p>
        セキュアブートをOFFにします。セキュアブートとはOS起動時に証明書を確認してから起動する安全機能のことです。
        自作OSを起動するときはこの機能をOFFにする必要があります。
      </p>
      <p>
        Turn off secure boot function. Secure boot is secure function and check profile before boot OS.
        If you want to boot hobby-operation-system, you need turn off this function.
      </p>
      <Img_50 path="/assets/Bootセキュア変更設定.jpg" alt="Bootセキュア変更設定" />

      <h3>■起動の優先順位設定/Priority of boot</h3>
      <p>USBの優先順位を1番上に、Windowsは起動しないように設定します。これを行うことによって、USBドライブから優先的に起動されます。</p>
      <p>Change priority first is USB and don't boot windows OS. So you can boot UEFI application by USB.</p>
      <Img_50 path="/assets/boot設定.jpg" alt="boot設定" />

      <SubTitle subTitle="ディスクフォーマットの設定/Setting of disk format" />
      <h3>■ディスクフォーマットを変更/Change disk format setting</h3>
      <ol>
        <li>
          USBがPCに挿さっていることを確認します。
        </li>
        <li>
          Win + R を押下して `diskmgmt.msc`を入力し、ディスクの管理という設定画面に入ります。
        </li>
        <li>
          USBの容量が32G以上の場合、ディスクのフォーマットをFAT32にします。それ以下の場合はexFATでもよいです。
        </li>
      </ol>
      <ol>
        <li>
          Confirm device is inserted an USB.
        </li>
        <li>
          Push Win + R and write `diskmgmt.msc` then open disk setting.
        </li>
        <li>
          If USB have over 32G, disk's format change FAT32. Under 32G, exFAT is OK too.
        </li>
      </ol>
      {/* <Img_30 path="/assets/diskの管理.png" alt="diskの管理" /> */}
      <Img_50 path="/assets/ディスクフォーマット.png" alt="ディスクフォーマット" />

      <h3>■exFATからディスクフォーマットを変更する方法/How to change disk format from exFAT</h3>
      <p>USB容量が32G以上の場合で一度exFATにしてしまった場合はGUIから変更することができません。diskpartを使って修正することができます。</p>
      <p>When USB have over 32G and disk format is exFAT, you can't change disk format by GUI. You can change by diskpart.</p>
      <ol>
        <li>管理者権限でCMDを開く</li>
        <li>`diskpart`と入力しEnterを押してdiskpartモードに入る</li>
        <li>
          `list disk`コマンドで今存在するdiskの一覧を出す
          {/* <Img_30 path="/assets/disckフォーマット修正.jpeg" alt="disckフォーマット修正" /> */}
        </li>
        <li>diskのサイズから対象ディスクの番号を把握する</li>
        <li>`select disk ＜USBの番号＞`で操作するdiskを選択する</li>
        <li>
          以下のコマンドを実行してディスクフォーマットの設定を変更する
          <SourceCode>{command_ex}</SourceCode>
        </li>
        <li>`exit`でdiskpartモードから抜ける</li>
      </ol>
      <ol>
        <li>Open CMD as administrator</li>
        <li>Enter `diskpart` and push Enter button. Then cmd mode change diskpart.</li>
        <li>
          Enter `list disk`, then you can watch disk table.
        </li>
        <li>Get disk number by disk size.</li>
        <li>Select disk which you operate by `select disk ＜disk number for USB＞` command.</li>
        <li>
          Change disk format setting by this command.
          <SourceCode>{command_ex}</SourceCode>
        </li>
        <li>Exit diskpart mode by `exit` command.</li>
      </ol>
      <SubTitle subTitle="アプリケーションプログラム/Program of application " />
      <p>
        UEFIデバイスで実行できるアプリケーションをUEFIアプリケーションと呼びます。
        UEFIアプリケーションは「EFI/BOOT/BOOTX64.EFI」のように特定フォルダにないと実行されないためフォルダが正しいか確認しましょう。
      </p>
      <p>
        We call application for UEFI device "UEFI application".
        UEFI application only boot specific folder for example "EFI/BOOT/BOOTX64.EFI" So you should confirm application path.
      </p>
      <SubTitle subTitle="結果/Result" />
      <h3>■失敗しているとき/When booting fails</h3>
      <p>上記の手順に漏れがあると以下のような画面に遷移してしまいます。</p>
      <p>When skip some process this article, your device transition like this picture.</p>
      <Img_50 path="/assets/失敗_セキュアブート.jpg" alt="失敗_セキュアブート" />
      <Img_50 path="/assets/失敗_2.jpg" alt="失敗_2" />
      <h3>■成功しているとき/When booting succeeds</h3>
      <p>
        成功すると以下のように表示できます。
        筆者のUEFIアプリケーションは Hello, world! を表示するだけのもので、小さいですが表示されていることが確認できます🎉
      </p>
      <p>
        When success boot, you can watch this picture.
        Author's UEFI application program is only show "Hello, world!", I could small text in my device🎉
      </p>
      <Img_50 path="/assets/成功.jpg" alt="成功" />

      <SubTitle subTitle="おわりに/In conclusion" />
      <p>
        お役に立てたでしょうか？皆様の成功のお手伝いができていれば幸いです。
        OSについて勉強したい方は<a href="https://osdev.jp/">osdev</a>というOS自作のコミュニティがお勧めです。一緒に自作OS界隈を盛り上げていきましょう😊
      </p>
      <p>
        Could I help you? I wish I could help your success.
        There are hobby-operation-system community, <a href="https://osdev.jp/">osdev</a>. If you want to join us, let's make it exciting😊
      </p>
      <h4>参考</h4>
      <References_link author="Microsoft" url="https://support.microsoft.com/ja-jp/surface/usb-%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%81%8B%E3%82%89-surface-%E3%82%92%E8%B5%B7%E5%8B%95%E3%81%99%E3%82%8B-fe7a7323-8d1d-823d-be17-9aec89c4f9f5" articleTitle="USB デバイスから Surface を起動する"/>
      <References_book author="内田公太" bookTitle="ゼロからのOS自作入門" chapter="1章" lastUpdate="2021"></References_book>
      <References_link url="https://www.partitionwizard.jp/partitionmagic/no-exfat-format-option.html" lastUpdate="2024" author="Yukiya" articleTitle="Windows 11/10/8/7のフォーマットでexFATが利用できない場合の対処法" />
    </ArticalPage>
  );
}